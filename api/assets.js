import jwt from 'jsonwebtoken';
const secret_key="szedlsashasuchasosza"
//aa

export async function verifyToken(token) {
    try {
        return await jwt.verify(token, secret_key);
    } catch (err) {
        return null; // Token is invalid or expired
    }
}

export function generateToken(userId) {
    const payload = {
        userId: userId,
        issue_time: Date.now(),
        expiration_time: Date.now() + 7200000 // 2 hours
    };
    return {token_string:jwt.sign(payload, secret_key),token:payload}
}