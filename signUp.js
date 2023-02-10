
const users = [
    { email: "ram@gmail.com", password: "09876" },
    { email: "shyam@gmail.com", password: "99999" },
    { email: "hari@gmail.com", password: "88888" },
    { email: "ghanshyam@gmail.com", password: "77777" },
];
    ((signUp) => {
        const email = "";
        const password = ""

        signUp.inputNewUsers = function (email, password) {
            this.email = email
            this.password = password
            
            signUp.validateUser();
            
            // const err = signUp.isAvailable();
            // console.log(err)
        }

        signUp.validateUser = function (){
            let isAvailable = false;
            for(let i = 0;i<users.length;i++){
                if(users[i].email == this.email){
                    isAvailable = true;
                    console.log("A")
                }
            }
            if(isAvailable){
                console.log("B")
                console.log("Username exists...")
            }else{
                console.log("C")
            }
        }
    })(module.exports)