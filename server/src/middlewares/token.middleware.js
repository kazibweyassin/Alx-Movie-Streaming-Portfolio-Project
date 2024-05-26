import jwt from 'jsonwebtoken';
import responseHandler from '../handlers/response.handler.js';
import userModel from '../models/user.model.js';

const tokenDecoded = (req) => {
    try {
        const bearerHeader = req.headers['authorization'];

        if (bearerHeader) {
            const token = bearerHeader.split(' ')[1];
            return jwt.verify(token, process.env.JWT_SECRET);
        }

        return null;
    } catch (error) {
        // Handle token verification errors
        return null;
    }
};

const auth = async (req, res, next) => {
    const tokenDecodeData = tokenDecoded(req);
    if (!tokenDecodeData) return responseHandler.unauthorized(res);

    try {
        const user = await userModel.findById(tokenDecodeData.id);
        if (!user) return responseHandler.unauthorized(res);

        // Pass decoded token data to the next middleware
        req.user = user;
        next();
    } catch (error) {
        // Handle database errors
        return responseHandler.internalServerError(res);
    }
};

export default { auth, tokenDecoded };
