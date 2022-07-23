const fs = require("fs").promises;
// fileRead => promise로 반환
class UserStorage {
  static getUsers(...arg) {
    // 은닉화된 users 리턴
    const newUsers = arg.reduce((newUsers, arg) => {
      if (users.hasOwnProperty(arg)) {
        newUsers[arg] = users[arg];
      }

      return newUsers;
    }, {});

    return newUsers;
  }

  static async gerUserInfo(id) {
    return fs.readFile("./src/databases/users.json").then((data) => {
      return this.#getUserInfo(data, id);
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

  static save() {
    fs.readFile("./src/databases/users.json", (err, data) => {
      if (err) throw err;
      console.log("ㅁㄴㅇㄴㅁㅇㅁㄴ", JSON.parse(data));
    });
    // db만들어야겠지
  }
}

module.exports = UserStorage;
