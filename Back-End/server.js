import express from "express";

import "dotenv/config";

const app = express()
const PORT = process.env.PORT || 3000;
import cors from "cors"

app.use(cors());
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.send("Hi everyone");
});

// // headers
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Aloow-Methods: POST, GET, OPTIONS, PUT, DELETE')
// header('Access-Control-Aloow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

// Routes file

import routes from './routes/index.js';
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));