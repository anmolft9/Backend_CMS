import AdminUserSchema from "./AdminUserSchema";

export const inserUser = (obj) => {
  return AdminUserSchema(obj).save();
};
