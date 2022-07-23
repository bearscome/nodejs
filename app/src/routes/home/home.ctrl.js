//router callback 함수

const output = {
    home : (req, res) => {
        res.render("home/index")
    },
    login : (req, res) => {
        res.render("home/login")
    }
}


const users = {
    id: ['a', 'b', 'c'],
    password: ['a', 'b', 'c']
}

const process = {
    login: (req, res) => {
        console.warn('user ',req.body);
        if(users.id.includes(req.body.id)) {
            const idx = users.id.indexOf(req.body.id);
            if(users.password[idx] === req.body.password) {
                return res.json({
                    success:true,
                    msg:'성공'
                })
            }
        }

        return res.json({
            success:false,
            msg:"실패"
        });
    }
}



module.exports = {output, process}