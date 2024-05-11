const jwtProvider = require("../config/jwtProvider");
const userService = require("../services/user.service");

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: 'Token not found' });
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await userService.findUserById(userId);
        req.user = user;
        // Call next to proceed to the next middleware/route handler
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    next();
}

module.exports = authenticate;
