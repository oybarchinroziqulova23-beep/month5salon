import mongoose from "mongoose";

const salonSchema = new mongoose.Schema(
    {
        salonName: {
            type: String,
            required: true
        },
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        description: {
            type: String
        }
    },
    { 
        timestamps: true,
        versionKey: false
    }
);

export const Salon = mongoose.model("Salon", salonSchema);
