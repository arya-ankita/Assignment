const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');


const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
exports.signup = async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        const token = signToken(newUser._id);

        res.status(201).json({
            status: 'success',
            token,
            message: 'User created successfully',
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.login = async (req, res) => {
    console.log("Hi");
    try {
        const { Email, Password } = req.body;
console.log(Email, Password);
console.log(req.body);
        // 1) If email and password actually exists
        if (!Email || !Password) {
            return res.send('Please provide email and password')
        }
        // 2) Check if user exists && password is correct
        const user = await User.findOne({ Email }).select('+Password');


        if (!user || !(user.Password === Password)) {
            return res.send('Incorrect email or password');
        }

        // 3) If everything ok, send token to  client
        console.log('tt', user);
        const token = signToken(user._id);
        res.status(200).json({
            status: 'success',
            token,
            message: 'Login Successfull',
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'Invalid User',
        });
    }
};

