import { JSONSchema6 } from "json-schema";

export const signupUserSchema: JSONSchema6 = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string", pattern: "[a-zA-Z0-9.]+@[a-zA-Z]+.[a-zA-Z]{2,3}" },
    password: { type: "string" },
  },
  required: ["firstName", "lastName", "email", "password"],
};
