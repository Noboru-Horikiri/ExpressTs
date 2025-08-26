import express from "express";
const router = express.Router();

/* GET home page. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

export { router };