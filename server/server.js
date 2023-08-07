const express = require("express");
const path = require("path");
const db = require("./db/connection");

const app = express();
const PORT = process.env.PORT || 3333;
const is_prod = process.env.PORT;

// Import routes
const api_routes = require("./routes/api_routes");

// Load middleware
if (is_prod) {
    app.use(express.static(path.join(__dirname, "../browser/build")));
}

app.use(express.json());

// Load routes
app.use("/api", api_routes);

// Ensure the db connection is open and start the express server
db.once("open", () => {
    // Start express
    app.listen(PORT, () => console.log("Server started on port %s", PORT));
});