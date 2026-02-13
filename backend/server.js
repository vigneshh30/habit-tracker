require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const habitRoutes = require("./routes/habitRoutes");

const app = express();
const PORT = process.env.PORT;


app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected (Local) "))
.catch((err) => console.log("Connection Error ", err));


app.use("/api/habits", habitRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `);
});
