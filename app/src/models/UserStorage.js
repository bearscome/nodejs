const db = require("../config/db");

class UserStorage {
  static getUsers(isAll, ...arg) {
    // 은닉화된 users 리턴
    return fs.readFile("./src/databases/users.json").then((data) => {
      return this.#getUsers(data, isAll, arg);
    });
  }

  static #getUsers(data, isAll, fileds) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fileds.reduce((newUsers, arg) => {
      if (users.hasOwnProperty(arg)) {
        newUsers[arg] = users[arg];
      }

      return newUsers;
    }, {});

    return newUsers;
  }

  static async gerUserInfo(id) {
    return new Promise((res, rej) => {
      db.query("select * from users where id = ?", [id], (err, data) => {
        if (err) rej(err);
        res(data[0]);
      });
    });
  }

  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((number, info) => {
      number[info] = users[info][idx];
      return number;
    }, {});

    return userInfo;
  }

  static async save(userInfo) {}
}

module.exports = UserStorage;
