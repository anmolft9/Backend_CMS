import Joi from "joi";
import {
  ADDRESS,
  DATE,
  EMAIL,
  FNAME,
  LNAME,
  PASSWORD,
  PHONE,
  validator,
} from "./constant";

export const newAdminUserValidation = (req, res, next) => {
  ///define rules
  // console.log("check");
  const schema = Joi.object({
    fName: FNAME.required(),
    lName: LNAME.required(),
    email: EMAIL.required(),
    password: PASSWORD.required(),
    phone: PHONE,
    address: ADDRESS,
    dob: DATE.allow("", null),
  });
  //give data to the rules
  validator(schema, req, res, next);
};

export const emailVerificationValidation = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL.required(),
    emailValidationCode: SHORTSTR.required(),
  });

  validator(schema, req, res, next);
};

export const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL.required(),
    password: PASSWORD.required(),
  });
  validator(schema, req, res, next);
};
