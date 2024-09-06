/*
CRUD Operations

GET     --- GET INFO 
POST   ---- CREATE NEW INFO 
PUT     --- UPDATE CURRENT INFO
DELETE  --- DELETE THE CURRENT INFO
*/

const express = require('express');
const router = express.Router();
let students = [
    {
        firstname: 'Abhishek',
        lastname: 'Kumar',
        email: 'abhi@gmail.com',
        age: 22,
        amount: 7800
    },
    {
        firstname: 'laxmi',
        lastname: 'narah',
        email: 'laxmi2@gmail.com',
        age: 21,
        amount: 700
    },
    {
        firstname: 'Dilip',
        lastname: 'Pasagadugula',
        email: 'dilip3@gmail.com',
        age: 22,
        amount: 78000
    },
    {
        firstname: 'Balaji',
        lastname: 'Dande',
        email: 'balaji4@gmail.com',
        age: 21,
        amount: 800
    },
    {
        firstname: 'Himanshu',
        lastname: 'Dande',
        email: 'hima@gmail.com',
        age: 29,
        amount: 10
    },
    {
        firstname: 'Divyabharati',
        lastname: 'G',
        email: 'diviyabharati5@gmail.com',
        age: 22,
        amount: 7500
    }
];



router.get('/', (req, res) => {
    res.send(students);
})
//Invoke-WebRequest -Uri 'http://localhost:5000/student' -Method 'GET'
//localhost:5000/student

router.get('/:email', (req, res) => {
    const email = req.params.email;
    let filtered_students = students.filter((student) => student.email === email);
    res.send(filtered_students);
})

//Invoke-WebRequest -Uri 'http://localhost:5000/student/dilip3@gmail.com' -Method 'GET'
//localhost:5000/student/dilip3@gmail.com


router.post('/', (req, res) => {

    students.push({
        firstname: req.query.firstname,
        lastname: req.query.lastname,
        email: req.query.email,
        age: req.query.age,
        amount: req.query.amount
    });
});
//Invoke-WebRequest -Uri 'http://localhost:5000/student/?firstname=abhi&lastname=kumar&email=abhishek17@gmail.com&age=23' -Method 'POST'
//localhost:5000/student/?firstname=abhi&lastname=kumar&email=abhishek17@gmail.com&age=23


router.put('/:email', (req, res) => {
    const email = req.params.email;

    let filtered_students = students.filter((student) => student.email === email);

    if (filtered_students.length > 0) {

        let filtered_student = filtered_students[0];
        let age = req.query.age;
        let firstname = req.query.firstname;
        let lastname = req.query.lastname;
        let amount = req.query.amount;
        if (age) {
            filtered_student.age = age;
        }
        if (firstname) {
            filtered_student.firstname = firstname;
        }
        if (lastname) {
            filtered_student.lastname = lastname;
        }
        if (amount) {
            filtered_student.amount = amount;
        }
        students = students.filter((student) => student.email != email);
        students.push(filtered_student);
        res.send(`Student with email ${email} updated`);
    }
    else {
        res.send("Unable to find the student");
    }
})


//Invoke-WebRequest -Uri 'http://localhost:5000/student/dilip3@gmail.com?firstname=raj' -Method 'PUT'



router.delete('/:email', (req, res) => {
    const email = req.params.email;
    students = students.filter((student) => student.email != email);
    res.send(`Student with email ${email} deleted.....`)
})
//Invoke-WebRequest -Uri 'http://localhost:5000/student/haripriya1@gmail.com' -Method  'DELETE'
//localhost:5000/student/haripriya1@gmail.com


module.exports = router;
//curl --request POST/PUT/DELETE/GET 'localhost......?firstname=abhi&lastname=john....


