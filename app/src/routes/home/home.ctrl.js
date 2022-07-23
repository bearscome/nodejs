//router callback 함수

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const users = UserStorage.getUsers("id", "password");
    const response = {};

    if (users.id.includes(req.body.id)) {
      const idx = users.id.indexOf(req.body.id);
      if (users.password[idx] === req.body.password) {
        response.success = true;
        response.msg = "성공";
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "실패";
    return res.json(response);
  },
};

module.exports = { output, process };
