//서버 가동도 따로 빼서 실행하네?
// app.js에서 bin/www.js로 이동했으니, app.js를 실행하는게 아닌 www.js를 실행하여야 한다.
// node .bin/www.js

const app = require("../app");
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});
