/**
 * jsonwebtoken
 * 生成（加密） jwt.sign() 
 * 验证（解密） jwt.verify()
 * 
 */

const jwt = require('jsonwebtoken');

let privateKey = 'nglithoi';

// 生成token
exports.create = (username,expiresIn='3h')=>{
    // username: 用于加密的用户名
    // expiresIn: token有效期(单位: s)，默认2小时
    // privateKey：用于加密的私钥
    let token = jwt.sign({username}, privateKey, {
        expiresIn
    });
    
    return token;
}

// 验证token
exports.verify =(token)=>{

    let res = false;

   try{

       //得出解密后的结果Object:{username:xxx...}
       res = jwt.verify(token, privateKey);
   }catch(err){

       res = false;
   }

   return res;
}