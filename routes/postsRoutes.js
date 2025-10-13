import { Router } from "express";
import * as Post from "../data/post.js";

const router = Router();

router.get("/", (req, res) => {
  const posts = Post.getPosts();
  res.json(posts);
});

router.get("/:id", (req, res) => {
  const id = +req.params.id;
  const post = Post.getPostById(id);
  res.status(200).json(post);
});

router.post("/", (req, res) => {
  const { userId, title, content } = req.body;
  if (!userid || !title || !content) {
    res.status(400).json({ message: "Data was not found" });
  }
  const savedPost = Post.savePost(userId, title, content);
  const post = Post.getPostById(savedPost.lastInsertRowid);
  res.status(200).json(post);
});

router.put("/:id", (req, res) => {
  const id = +req.params.id;
  let post = Post.getPostById(id);
  if (!post) {
    res.status(404).json({ message: "Post was not found" });
  }
  const { userId, title, content } = req.body;
  if (!userId || !title || !content) {
    res.status(400).json({ message: "Data was not found" });
  }
  Post.updatePost(id, userId, title, content);
  post = Post.getPostById(id);
  res.status(200).json(post);
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const post = Post.getPostById(id);
  if (!post) {
    res.status(404).json({ message: "Post was not found" });
  }
  Post.deletePost(id);
  res.status(200).json({ message: "Post was deleted" });
});

export default router;
