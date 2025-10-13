import express from "express";
import * as User from "../data/user.js";

const router = express.Router();

router.get("/", (req, res) => {
  const users = User.getUsers();
  res.json(users);
});

router.get("/:id", (req, res) => {
  const id = +req.params.id;
  const user = User.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: "User was not found" });
  }
  res.status(200).json(user);
});

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(404).json({ message: "Data was not found" });
  }
  const savedUser = User.saveUser(name, email, password);
  const user = User.getUserById(savedUser.lastInsertRowid);
  res.status(200).json(user);
});

router.put("/:id", (req, res) => {
  const id = +req.params.id;
  let user = User.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: "User was not found" });
  }
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Data was not found" });
  }
  User.updateUser(id, name, email, password);
  user = User.getUserById(id);
  res.status(200).json(user);
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const user = User.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: "User was not found" });
  }
  User.deleteUser(id);
  res.status(200).json({ message: "User was deleted" });
});

export default router;
