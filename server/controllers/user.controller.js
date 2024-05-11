const userService = require("../services/user.service");

const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];

        if (!jwt) {
            return res.status(401).json({ error: "Authorization token not found" });
        }

        const user = await userService.getUserProfileByToken(jwt);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { getUserProfile, getAllUsers };