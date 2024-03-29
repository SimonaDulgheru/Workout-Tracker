const router = require("express").Router();
const mongoose = require('mongoose');
const Workout = require('../models/workoutModel.js');

router.post('/api/workouts', (req, res) => {
    const createWorkout = req.body
    Workout.create({createWorkout})
        .then(dbWorkout => {
            res.json(dbWorkout)
            console.log(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}},
        // { new: true, runValidators: true }
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    
});

router.put("/api/stats", ({body, params}, res) => {
    Workout.update(
        {_id: mongojs.ObjectId(req.params.id)},
        {$push: {exercises: body}},
    )
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    
});


router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            console.log(dbWorkouts)
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete("/api/workouts", (req, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;