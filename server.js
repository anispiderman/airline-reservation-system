const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const db = require("./db");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Altura Airways Backend is Running!");
});

app.get("/flights", (req, res) => {
    const sql = "SELECT * FROM flight";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error getting flights:", err);
            res.status(500).json({ message: "Could not get flights." });
            return;
        }

        res.json(results);
    });
});

app.post("/register", async (req, res) => {

    const { first_name, last_name, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 12);
    const sql = `
    INSERT INTO passenger
    (legal_name, email, password_hash, date_of_birth, street_num, street_city, postal_code, province, country, passport_number)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            `${first_name} ${last_name}`.trim(), email, passwordHash,
            req.body.date_of_birth, req.body.street_num, req.body.street_city,
            req.body.postal_code, req.body.province, req.body.country,
            req.body.passport_number
        ],
        (err, result) => {

            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Registration failed."
                });
            }

            res.json({
                message: "User registered successfully!"
            });

        }
    );

});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM passenger WHERE email = ?";

    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error." });
        }

        if (results.length === 0 || !(await bcrypt.compare(password, results[0].password_hash))) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        res.json({
            message: "Login Successful!",
            user: {
                id: results[0].passenger_id,
                legal_name: results[0].legal_name,
                email: results[0].email
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
