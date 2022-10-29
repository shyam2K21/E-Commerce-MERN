require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PAYPAL_CLIENT_ID = process.PAYPAL_CLIENT_ID;

module.exports = {
    MONGODB_URI,
    PAYPAL_CLIENT_ID
}