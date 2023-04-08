const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient; //MONGODB 객체 가져오기
MongoClient.connect(
    'mongodb+srv://peleusdd:lee95749574@cluster0.9dn4979.mongodb.net/?retryWrites=true&w=majority',
    { useUnifiedTopology: true },
    function (error, client) {
        if (error) return console.log(error);
        db = client.db('EveryTime');
			//데이터베이스를 연결시켜줬다.
        app.listen(3000, function () {
            console.log('listening on 3000');
        });
    }
);

app.use('/public', express.static('public'))

app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/HTML.html');
})