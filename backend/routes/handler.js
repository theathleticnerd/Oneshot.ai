const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/student', async (req, res) => {
    const student = Schemas.Student;

    // this code will get all tweets
    //const userTweets = await tweets.find({}, (err, tweetData) => {

    // this code will get all tweets and join the user table
    const collegeStudents = await student.find({}).populate("college").exec((err, studentData) => {
        if (err) throw err;
        if (studentData) {
            res.end(JSON.stringify(studentData));
        } else {
            res.end();
        }
    });
});

router.post('/addStudent', async (req, res) => {
    const collegeStudent = req.body.studentInput;
    const college = Schemas.College;
    const collegeId = await college.findOne({username:'College1'}).exec();

    const newStudent = new Schemas.Student({
        student_name: collegeStudent,
        batch_year: collegeStudent,
        college_id: collegeId._id,
    });

    try {
        await newStudent.save( (err, newStudentResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/student');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/student');
        res.end();
    }
});

/*

// Uncomment to add a new user document to our users table
// To use this, run the backend server, then go to URL: localhost:4000/addUser

router.get('/addUser', async (req, res) => {
    const user = {username: 'eaglefang', fullname: 'Sensei Johnny'};
    const newUser = new Schemas.Users(user);

    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added!');
    }
});
*/

module.exports = router;