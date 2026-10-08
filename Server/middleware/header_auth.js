"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_SECRET = process.env.API_SECRET;
function authenticateToken(req, res, next) {
    const secret = req.headers['x-api-secret'];
    if (!secret || secret !== API_SECRET) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}
exports.default = authenticateToken;
