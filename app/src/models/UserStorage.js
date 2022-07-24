const db = require("../config/db");

class UserStorage {
  static async gerUserInfo(id) {
    return new Promise((res, rej) => {
      const query = "SELECT * FROM a WHERE id = ?";
      db.query(query, [id], (err, data) => {
        if (err) rej(`${err}`);
        else res(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((res, rej) => {
      const query = "INSERT INTO ab(id, name, password) VALUE(?,?,?)";
      const { id, name, password } = userInfo;
      db.query(
        query,
        // 쿼리문
        [id, name, password],
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
