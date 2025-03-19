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

        res.status(201).json({ token });

    } catch (error) {
        console.error(error);
    }
};

export const login = async (req, res) => {
};