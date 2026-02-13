const Habit = require("../models/habit");


exports.createHabit = async (req, res) => {
    try {
        const { title } = req.body;

        const newHabit = new Habit({ title });
        await newHabit.save();

        res.status(201).json(newHabit);
    } catch (error) {
        res.status(500).json({ message: "Error creating habit" });
    }
};


exports.getHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.status(200).json(habits);
    } catch (error) {
        res.status(500).json({ message: "Error fetching habits" });
    }
};


exports.deleteHabit = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedHabit = await Habit.findByIdAndDelete(id);

        if (!deletedHabit) {
            return res.status(404).json({ message: "Habit not found" });
        }

        res.status(200).json({ message: "Habit deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting habit" });
    }
};


exports.updateHabit = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        const updatedHabit = await Habit.findByIdAndUpdate(
            id,
            { completed },
            { new: true }
        );

        if (!updatedHabit) {
            return res.status(404).json({ message: "Habit not found" });
        }

        res.status(200).json(updatedHabit);
    } catch (error) {
        res.status(500).json({ message: "Error updating habit" });
    }
};
