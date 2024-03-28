const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        imageURL: {
            type: String,
        },
        user_id: {
            type: String,
            required: true,
        },

        email_verfied: {
            type: Boolean,
            required: true,
        },

        role: {
            type: String,
            required: true,
        },

        auth_time: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
