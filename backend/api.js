const Joi = require("joi");
const {registerUser, transferCredit, getUserBalance} = require("./services");

const api = [
  {
    method: "POST",
    path: "/register",
    handler: registerUser,
    config: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().min(6).required(),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/transactions",
    handler: transferCredit,
    config: {
      validate: {
        payload: Joi.object({
          sender: Joi.string().required(),
          recipient: Joi.string().required(),
          amount: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: "GET",
    path: "/users/{id}/balance",
    handler: getUserBalance,
    config: {
      validate: {
        params: Joi.object({
          id: Joi.string().required(),
        }),
      },
    },
  },
  {
    method: "GET",
    path: "/users/{id}/transactions",
    handler: getUserBalance,
    config: {
      validate: {
        params: Joi.object({
          id: Joi.string().required(),
        }),
      },
    },
  },
];


module.exports = {
    api
}