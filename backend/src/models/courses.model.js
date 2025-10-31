import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    studentEnrolled: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    thumbnail: {
        type: String,
        require: true
    },
    assignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment"
    }
},{timestamps: true})

export const Courses = mongoose.model('Courses', coursesSchema)