
const express = require("express");

const app = express();


// Log each request and its response status
app.use((req, res, next) => {
    res.on("finish", () => {
        console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
    });
    next();
});

// Home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to BDF Lab 1!");
});

// About route
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "B.Sahithi",
        section: "CSE-2A"
    });
});

// Time route
app.get("/time", (req, res) => {
    res.status(200).json({
        currentDateTime: new Date().toString()
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start Express server
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });