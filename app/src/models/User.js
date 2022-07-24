const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, password } = await UserStorage.gerUserInfo(client.id);
    console.log(client, id, password);

    if (id) {
      if (id === client.id && password === client.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }

    return { success: false, msg: "존재하지 않는 아이디 입니다." };
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { sucess: false, msg: err };
    }
  }
}

module.exports = User;
