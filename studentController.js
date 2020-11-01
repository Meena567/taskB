// studentController.js
// Import student model
Student = require('./studentModel');
// Handle index actions
exports.index = function (req, res) {
    Student.get(function (err, students) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Students retrieved successfully",
            data: students
        });
    });
};
// Handle create student actions
exports.new = function (req, res) {
    var student = new Student();
    student.name = req.body.name ? req.body.name : student.name;
    student.gender = req.body.gender;
    student.email = req.body.email;
    student.phone = req.body.phone;
// save the student and check for errors
    student.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New student created!',
            data: student
        });
    });
};
// Handle view student info
exports.view = function (req, res) {
    Student.findById(req.params.student_id, function (err, student) {
        if (err)
            res.send(err);
        res.json({
            message: 'Student details loading..',
            data: student
        });
    });
};
// Handle update student info
exports.update = function (req, res) {
Student.findById(req.params.student_id, function (err, student) {
        if (err)
            res.send(err);
student.name = req.body.name ? req.body.name : student.name;
        student.gender = req.body.gender;
        student.email = req.body.email;
        student.phone = req.body.phone;
// save the student and check for errors
        student.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Student Info updated',
                data: student
            });
        });
    });
};
// Handle delete student
exports.delete = function (req, res) {
    Student.remove({
        _id: req.params.student_id
    }, function (err, student) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Student deleted'
        });
    });
};