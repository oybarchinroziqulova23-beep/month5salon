import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        salonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Salon",
            required: true
        }
    },
    { 
        timestamps: true,
        versionKey: false 
    }
);

export const Service = mongoose.model("Service", serviceSchema);
