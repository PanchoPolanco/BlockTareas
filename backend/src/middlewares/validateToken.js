import { TOKEN_SECRET } from "../config.js";

export const validateToken = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: 'Access denied'});
    }

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
        if (error) {
            return res.status(401).json({ message: 'Access denied'});
        }
        req.user = user;
    });

    next();
};