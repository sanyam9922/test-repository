const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env?.PORT || 8000;
app.get("/", async (req, res) => {
    res.send("Express Server");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});