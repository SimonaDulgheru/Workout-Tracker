const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema (
    {
        day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {

            type: {
                type: String,
                trim: true,
                required: "Name is Required"
        },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name"
        },
            duration: {
                type: Number,
                trim: true,
                required: "Enter an exercise name"
        },
            weight: {
                type: Number,
                trim: true,
                required: "A weight is Required"
        },
            reps: {
                type: Number,
                trim: true,
                required: "A repetition is Required"
        },
            sets: {
                type: Number,
                trim: true,
                required: "A set is Required"
        },
            distance: {
                type: Number
        }
        }
    ]
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;