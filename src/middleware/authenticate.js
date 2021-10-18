 const jwt = require('jsonwebtoken');
 require('dotenv').config();

 function verifyToken(token)
 {
     return new Promise(function(resolve, reject){
         jwt.verify(
           token,
             process.env.JWT_SECRET_KEY ,
           function (err, user) {
             if (err) return reject(err);

             return resolve(user);
           }
         );
     })
 }
 
 async function authenticate (req,res, next)
 {
     const bearerToken = req.headers.authorization;
     const token = bearerToken.split(" ")[1];

     if (!bearerToken || ! bearerToken.startsWith('Bearer ')) 
     {
       return res.status(400).send({ message: "please provide the tokem" });  
     }

    
     

     const {user} = await verifyToken(token);
     console.log('user' , user);

     req.user = user;
     return next();
     
 };

 module.exports = authenticate;