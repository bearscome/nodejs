const UserStorage = require("./UserStorage");
const jwt = require("jsonwebtoken");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.gerUserInfo(client.id);
      const hashPassword = await UserStorage.checkUserHashPassword(user.password, user.salt);
      console.log("checkUser", user, hashPassword);
      if (user) {
        if (user.id === client.id && user.password === hashPassword) {
          const token = await setWebToken(user.id, user.name);
          console.log(`${user.nickname}님의 토큰이 발급되었습니다.`);
          return { success: true, user: { name: user.name, id: user.id }, token };
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
      return { success: false, msg: "존재하지 않는 아이디 입니다." };
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { sucess: false, err };
    }
  }
}

const setWebToken = (id, nickname) => {
  const SECRET_KEY = "MY-SECRET-KEY";

  return new Promise((resolve, reject) => {
    resolve(
      jwt.sign(
        {
          type: "JWT",
          id,
          nickname,
        },
        SECRET_KEY,
        {
          expiresIn: "15m", // 만료시간 15분
          issuer: "토큰발급자",
        }
      )
    );
  });
};

module.exports = User;
