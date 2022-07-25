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
    const { hashPassword, salt } = await createHashPassowrd(password);

    return new Promise((res, rej) => {
      const query = "INSERT INTO users(id, name, password, salt) VALUE(?,?,?,?)";
      db.query(
        query,
        // 쿼리문
        [id, name, hashPassword, salt],
        // 벨류에 들어갈 변수 값
        (err) => {
          // 에러
          if (err) rej(`${err}`);
          else res({ success: true });
        }
      );
    });
  }

  static checkUserHashPassword(password, salt) {
    return new Promise((resolve, reject) => {
      console.log({ password, salt });
      crypto.pbkdf2(password, salt, 9999, 64, "sha512", (err, key) => {
        if (err) reject(err);

        resolve(key.toString("base64"));
      });
    });
  }
}

const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
};

const createHashPassowrd = (password) => {
  return new Promise(async (resolve, reject) => {
    const salt = await createSalt();
    crypto.pbkdf2(password, salt, 9999, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ hashPassword: key.toString("base64"), salt });
    });
  });
};

module.exports = UserStorage;
