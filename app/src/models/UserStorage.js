const fs = require("fs").promises;
// fileRead => promise로 반환
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

  static async save(userInfo) {
    const users = await this.getUsers(true);
    console.log(users.id.includes("a"));
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디 입니다.";
    }

    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));

    return { success: true };

    // db만들어야겠지
  }
}

module.exports = UserStorage;
