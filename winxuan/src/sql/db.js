const MongoClient = require('mongodb').MongoClient;
const resuleSet = require('./resultSet');

//数据库地址
const url = 'mongodb://localhost:27017';
// const url ={ 'mongodb://localhost:27017': true }
//数据库名称
const dbName = 'winxuan';

let db = {};

//连接数据库
MongoClient.connect(url, function(err, client) {
  db = client.db(dbName);
});

module.exports = {
  //collection为集合,filter为过滤,data为数据
  //获取数据
  async select(collection, filter = {}) {
    //db.collection.find()该方法获取多条数据
    const result = await db.collection(collection).find(filter).toArray();
    return resuleSet(result.length > 0, result);
  },

  //添加数据
  async insert(collection, data) {
    //db.collection.insert()该方法插入一条或多条数据
    const result = await db.collection(collection).insert(data);
    return resuleSet(result.length > 0, result);
  },

  //更新数据
  async update(collection, filter, data) {
    //db.collection.update()该方法更新多条数据
    const result = await db.collection(collection).update(filter, data);
    return resuleSet(result.length > 0, result);
  },

  //删除数据
  async delete(collection, filter) {
    //db.collection.deleteOne() 该方法从集合中删除单个文档
    const result = await db.collection(collection).deleteOne(filter);
    return resuleSet(result.length > 0, result);
  },
};