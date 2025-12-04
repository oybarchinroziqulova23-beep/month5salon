import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            enum: ["salonchi", "client"],
            default: "client"
        }
    },
    { 
        timestamps: true,
        versionKey: false
    }
);

export const User = mongoose.model("User", userSchema);
