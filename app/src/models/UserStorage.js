class UserStorage {
  static #users = {
    // #는 외부에서 접근 불가
    id: ["a", "b", "c"],
    password: ["a", "b", "c"],
    name: ["a", "b", "c"],
  };

  static getUsers(...arg) {
    // 은닉화된 users 리턴
    const users = this.#users;
    const newUsers = arg.reduce((newUsers, arg) => {
      if (users.hasOwnProperty(arg)) {
        newUsers[arg] = users[arg];
      }

      return newUsers;
    }, {});

    return newUsers;
  }
}

module.exports = UserStorage;
