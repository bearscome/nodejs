//router callback 함수
const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
  home: (req, res) => {
    logger.info(`GET / 304 홈 화면으로 이동`);
    res.render("home/index");
  },

  login: (req, res) => {
    logger.info(`GET /login 304 로그인 화면으로 이동`);
    res.render("home/login");
  },

  register: (req, res) => {
    logger.info(`GET /register 304 회원가입 화면으로 이동`);
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    const path = "/login";
    const url = getLogConfig(path, response);

    log(response, url);
    return res.status(url.status).json(response);
  },
  register: async (req, res) => {
    console.log("req", req.body);
    const user = new User(req.body);
    const response = await user.register();
    const path = "/register";
    const url = getLogConfig(path, response);

    log(response, url);
    return res.status(url.status).json(response);
  },
};

module.exports = { output, process };

const getLogConfig = (path, response) => {
  return {
    method: "POST",
    path,
    status: response.err ? 400 : 201,
  };
};

const log = (response, url) => {
  const { method, path, status } = url;
  if (response.err) {
    logger.error(`${method} ${path} ${status} Response: ${response.success} ${response.err}`);
  } else {
    logger.info(`${method} ${path} ${status} Response: ${response.success} ${response.msg || ""}`);
  }
};
