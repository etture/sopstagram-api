const mysql = require('mysql');

const rds_conn = {
    host: process.env.RDS_HOST || "jinoolee-aws-rds.c5uvkznthg94.ap-northeast-2.rds.amazonaws.com",
    user: process.env.RDS_USER || "etture",
    password: process.env.RDS_PASSWORD || "nilotkud0279",
    database: process.env.RDS_DATABASE || "sopstagram"
};

const connection = mysql.createConnection(rds_conn);
connection.connect((err) =>{
    if(err){
        console.log("error:", err);
    } else{
        console.log('DB connected!');
    }
});

module.exports = connection;