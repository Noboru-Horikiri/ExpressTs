import express from "express";
const router = express.Router();

/* GET users listing. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/", function (req, res, next) {
  res.send("respond with a resource!!!!!!!!!!!!!");
});

export { router };
