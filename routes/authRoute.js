const router = require('express').Router();
const AuthController = require('./../controllers/authController');

router.post('/sign-up', AuthController.signup);
router.post('/sign-in', AuthController.login);

module.exports = router;