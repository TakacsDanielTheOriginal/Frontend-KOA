import express from "express";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";
import postsRoutes from "./routes/postsRoutes.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);


//Mindig a végén van
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server runs on port:${PORT}`);
})