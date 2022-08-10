import express from "express";

const router = express.Router();

router.post("/", (req, res, next) => {
  try {
    console.log(req.body);

    res.json({
      status: "success",
      message: "todo create new user",
    });
  } catch (error) {
    next(error);
  }
});
router.patch("/verify-email", (req, res, next) => {
  try {
    console.log(req.body);

    res.json({
      status: "success",
      message: "verify email todo create new user",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
