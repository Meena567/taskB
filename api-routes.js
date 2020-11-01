// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'api working',
        message: 'Welcome to studentviewer',
    });
});
// Import student controller
var studentController = require('./studentController');
// Student routes
router.route('/students')
    .get(studentController.index)
    .post(studentController.new);
router.route('/students/:student_id')
    .get(studentController.view)
    .patch(studentController.update)
    .put(studentController.update)
    .delete(studentController.delete);
// Export API routes
module.exports = router;