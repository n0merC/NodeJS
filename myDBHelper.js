

((myDBHelper)=>{
    const mysql = require('mysql2/promise')
    let con = "";

    myDBHelper.connection = async ()=>{
        try{
            con = await mysql.createPool({
                host : process.env.MYSQL_DB_HOST,
                user: process.env.MYSQL_DB_USER,
                database: 'nodeJS'
            });
           
        }catch(error){
            console.log("error connection",error)
        }
    }

    myDBHelper.query = async (query) =>{
        try{
            let res = await con.query(query)
            return res
        }catch(error){
            console.log(error)
        }
    }
})(module.exports)