const id = document.querySelector("#id");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

const login = () => {
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
        alert("로그인 실패");
      }
    })
    .catch((err) => console.error(new Error("로그인 중 에러 발생")));
};

btn.addEventListener("click", login);
