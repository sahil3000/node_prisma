const prisma = require('../prisma/index.js');
const cookieToken = require('../utils/cookieToken');
exports.signUp = async (req, res, next) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            throw new Error('Please provide all fields')
        }
        const user = await prisma.user2.create({
            data: {
              name: name,
              email: email,
              password: password
            }
          });
        // send user token
        cookieToken(user, res);
    } catch(err) {
        throw new Error(err);
    }
}