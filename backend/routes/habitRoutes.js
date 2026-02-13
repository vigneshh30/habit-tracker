const express = require("express");
const router = express.Router();

const {
    createHabit,
    getHabits,
    deleteHabit,
    updateHabit
} = require("../controllers/habitController");

router.post("/", createHabit);
router.get("/", getHabits);
router.delete("/:id", deleteHabit);
router.put("/:id", updateHabit);

module.exports = router;
