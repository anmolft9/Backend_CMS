import express from "express";
import { insertAdminUser } from "../models/admin/AdminUserModel";

const router = express.Router();


////server side valiadation 
//encrypt user pw
//insert into the db
//create unique verification code 
//send create a like pointing to out drontend with the email and verification code and send to their email

router.post("/", (req, res, next) => {
  try {
    console.log(req.body);
    const user = await insertAdminUser(req.body)

    user?._id 
    ?
    res.json({
        status: "success",
        message: "verification to you email, go fast",
      })
      :
      res.json({
        status: "error",
        message: "unable to create new admin user,try again",
      })

    
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
