import express from "express";
import { hashPassword } from "../helpers/bcryptHelper.js";
import { verificationEmail } from "../helpers/emailHelper.js";
import { newAdminUserValidation } from "../middlewares/joiValidation/adminUserValidation.js";

import { insertAdminUser } from "../models/admin/AdminUserModel.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

////server side valiadation

//encrypt user pw

//insert into the db
//create unique verification code
//send create a like pointing to out drontend with the email and verification code and send to their email

router.post("/", newAdminUserValidation, async (req, res, next) => {
  try {
    // console.log(password);

    // const hashPass = hashPassword;

    const { password } = req.body;
    req.body.password = hashPassword(password);
    req.body.emailValidationCode = uuidv4();

    const user = await insertAdminUser(req.body);
    if (user?._id) {
      res.json({
        status: "success",
        message: "verification to you email, go fast",
      });
      const url = `${process.env.ROOT_DOMAIN}/admin/verify-email?c=${user.emailValidationCode}&e=${user.email}`;

      verificationEmail({
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        url,
      });
      return;
    }

    res.json({
      status: "error",
      message: "unable to create new admin user,try again",
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
