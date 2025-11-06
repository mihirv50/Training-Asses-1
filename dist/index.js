import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.get("/hello", (req, res) => {
    res.json({
        msg: "Hello"
    });
});
app.get("/hello/:username", (req, res) => {
    const { username } = req.params;
    res.json({
        msg: `Hello ${username}`
    });
});
app.post("/hello", (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }
    res.json({ msg: `Hello ${username}` });
});
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map