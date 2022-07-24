const id = document.querySelector("#id");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

const login = () => {
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (!password.value) return alert("비밀번호를 입력해주세요.");

  const req = {
    id: id.value,
    password: password.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then(async (res) => res.json())
    .then((rs) => {
      if (rs.success) {
        location.href = "/";
      } else {
        if (rs.err) return alert(rs.err);
        alert(rs.msg);
      }
    })
    .catch((err) => console.error(new Error("로그인 중 에러 발생")));
};

btn.addEventListener("click", login);
