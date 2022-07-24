const db = require("../config/db");
const crypto = require("crypto");

class UserStorage {
  static async gerUserInfo(id) {
    return new Promise((res, rej) => {
      const query = "SELECT * FROM users WHERE id = ?";
      db.query(query, [id], (err, data) => {
        if (err) rej(`${err}`);
        else res(data[0]);
      });
    });
  }

  static async save(userInfo) {
    const { id, name, password } = userInfo;
    const salt = crypto.randomBytes(128).toString("base64");
    const hashPassword = crypto
      .createHash("sha512")
      .update(password + salt)
      .digest("hex");

    return new Promise((res, rej) => {
      const query = "INSERT INTO users(id, name, password) VALUE(?,?,?)";
      db.query(
        query,
        // 쿼리문
        [id, name, hashPassword],
        // 벨류에 들어갈 변수 값
        (err) => {
          // 에러
          if (err) rej(`${err}`);
          else res({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
