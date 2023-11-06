const authServices = require("../services/auth_services");
const helper = require("../helpers/response_body")
const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    authServices.verifyToken(token.split(" ")[1]);
  } catch (err) {
    return res.status(401).send(helper.responseBodyErro({message: "Vc nao ta logado"}));
  }

  return next();
};

module.exports = verifyToken;