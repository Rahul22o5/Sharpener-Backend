const fs = require('fs')
const path = require('path')

const express = require('express')
const mysql = require('mysql2')

const passwordPath = path.join(__dirname, '../rootPassword.txt')
const password = fs.readFileSync(passwordPath, 'utf-8').trim()//to remove any extra whitespace characters and convert the content to a string

const app = express()

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

    const createQuery=`create table students(
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})