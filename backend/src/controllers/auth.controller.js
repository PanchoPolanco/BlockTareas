import bcrypt from 'bcryptjs';
import User from '../models/usuario.model';
import { createAccessToken } from '../libs/jwt';

export const register = async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const emailExist = await User.findOne({ email});
        if (emailExist) {
            return res.status(400).json({ message: 'The email already exists'});
        }

        const passwordHahs = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHahs
        });
        await newUser.save();

        const token = await createAccessToken({ id: newUser._id });
        res.cookie('token', token)
        res.json({
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        });
    } catch (error) {
        console.error(error);
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });
        if (!userFound) {
            return res.status(400).json({ message: 'The email does not exists'});
        }

        const matchPassword = await bcrypt.compare(password, userFound.password);
        if (!matchPassword) {
            return res.status(401).json({ message: 'Incorrect password'});
        }

        const token = await createAccessToken({ id: userFound._id });
        res.cookie('token', token)
        res.json({ token });
        
    } catch (error) {
        console.error(error);
    }
};

export const logout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    res.status(200).json({ message: 'Logout successfully'});
};


export const profile = async (req, res) => {
    const userForm = await User.findById(req.user.id);
    
    if (!userForm) {
        return res.status(404).json({ message: 'User not found'});
    }   

    res.json({
        id: userForm._id,
        username: userForm.username,
        email: userForm.email,
    });
};

