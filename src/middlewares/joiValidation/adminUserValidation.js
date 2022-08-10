import Joi from "joi";

export const newAdminUserValidation = (req, res, next) => {
  try {
    ///define rules
    // console.log("check");
    const schema = Joi.object({
      fName: Joi.string().max(20).required(),
      lName: Joi.string().max(20).required(),
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      password: Joi.string().max(100).required(),
      phone: Joi.string().required(),
      address: Joi.string(),
      dob: Joi.date(),
    });
    //give data to the rules
    const { error } = schema.validate(req.body);

    if (error) {
      error.status = "200";
      return next(error);
    }
    next();
  } catch (error) {
    next(error);
  }
};
