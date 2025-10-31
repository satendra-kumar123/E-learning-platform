import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses"
    },
    deadline: {
        type: Date
    },
    submission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {}
);

export const Assignment = mongoose.model('Assignment', assignmentSchema)