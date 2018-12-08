const mysql = require('mysql');

const rds_conn = {
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE
};

const connection = mysql.createConnection(rds_conn);
connection.connect((err) =>{
    if(err){
        console.log("error:", err);
    } else{
        console.log('DB connected!');
    }
});