const fs = require('fs')
const path = require('path')
const mysql = require('mysql2')

const passwordPath = path.join(__dirname, '../../rootPassword.txt')
const password = fs.readFileSync(passwordPath, 'utf-8').trim()//to remove any extra whitespace characters and convert the content to a string

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'testdb'
})

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:', err)
        return
    }
    console.log('Connected to the database')

    const createQuery=`create table if not exists students(
        id INT auto_increment primary key,
        name Varchar(20) not null,
        email Varchar(20) not null
    )`

    connection.execute(createQuery,(err,result)=>{
        if(err){
            console.log('Error creating table:', err)
            connection.end()//for closing the connection
            return
        }
        console.log('Table created successfully')
    })
})

module.exports=connection