const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#registerBtn");

const register = () => {
  if (!id.value) return alert("아이디를 입력해주세요");
  if (password.value !== confirmPassword.value) return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  console.log("회원가입", req);

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then(async (res) => res.json())
    .then((rs) => {
      if (rs.success) {
        location.href = "/login";
      } else {
        alert("로그인 실패");
      }
    })
    .catch((err) => console.error(new Error("로그인 중 에러 발생")));
};

registerBtn.addEventListener("click", register);
