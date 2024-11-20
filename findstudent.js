const fs = require('fs');
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/";
const dbName = "411630519";
const collectionName = "studentslist";
(async () => {
    const client = new MongoClient(url);
    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const students = await collection.find({}).toArray();

        // 輸出學生名單
        console.log("學生名單：");
        students.forEach((student, index) => {
            console.log(`${index + 1}. 姓名: ${student.姓名}, 班級: ${student.班級}, Email: ${student.Email}`);
        });
    } catch (error) {
        console.error("發生錯誤：", error);
    } finally {
        // 關閉連線
        await client.close();
    }
})();