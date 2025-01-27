import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job: {
        type: String,
        required: true,
    }
})

const Data = mongoose.model("Data",dataSchema);

export default Data;
