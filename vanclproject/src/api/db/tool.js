/***
 * 
 * 数据库操作CRUD
 * 增 insert
 * 删 delete
 * 改 update
 * 查 find
 */

//引入模块
const mongodb = require('mongodb');

//MongoDB客户端
const MongoClient = mongodb.MongoClient;

//mongodb的database地址和名字
const database_url = 'mongodb://localhost:27017';
const database_name = 'BMSystem';

//连接MongoDB
async function connect(){
    let client = await MongoClient.connect(database_url,{ useNewUrlParser: true });
    let db = client.db(database_name);
    return {db,client}
}

//增
exports.insert = async (colName,data)=>{

    let {db,client} = await connect();

    let collection = db.collection(colName);
    let res = await collection[Array.isArray(data)?'insertMany':'insertOne'](data);

    client.close();

    return res;
}

//删
exports.delete = async (colName,query)=>{

    let {db,client} = await connect();

    let collection = db.collection(colName);
    let res = await collection['deleteMany'](query);

    client.close();

    return res;
}

//改
exports.update = async (colName,query,newData)=>{

    let {db,client} = await connect();

    let collection = db.collection(colName);
    let res = await collection['updateMany'](query,newData);

    client.close();

    return res;
}

//查
exports.find = async (colName,query)=>{

    let {db,client} = await connect();

    let collection = db.collection(colName);
    let res = await collection.find(query).toArray();

    client.close();

    return res;
}