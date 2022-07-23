const id = document.querySelector('#id')
const password = document.querySelector('#password')
const btn = document.querySelector('#btn')


console.warn({id, password, btn})

const login = () => {
   const req = {
    id:id.value,
    password:password.value
   } 
   console.warn(JSON.stringify(req));
   fetch('/login', {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req)
    }).then(async (res) => res.json()).then(console.log)
}

btn.addEventListener('click', login);