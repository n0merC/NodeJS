const { request } = require("express");
const httpStatus = require("http-status");

((sumCalculate) => {
    sumCalculate.sum = function(a,b){
        return a+b;
    }
    
    sumCalculate.dif = function(a,b){
        return a-b;
    }

    sumCalculate.login = async(username) => {
        const isvalid = await sumCalculate.loginValidation(username);
        let user = "Samrat"
        if(!isvalid){
            return{
                status: httpStatus.BAD_GATEWAY, 
                message: "Username is required"
            }
        }
        if(user == username){
            console.log("success")
            
            return  "success"
        }else{
            console.log("unsuccess")
            
            return "unsuccess"
        }
    }

    sumCalculate.loginValidation = (request) => {
        
        if(request){
            return true;
        }
        return false;
    }
})(module.exports)