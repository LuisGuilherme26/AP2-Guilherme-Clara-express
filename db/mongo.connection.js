var moongose = require("mongoose")

var mongoDB_URI = "mongodb://127.0.0.1:27017/Aluno"
moongose.connect(mongoDB_URI,{useNewUrlParser:true})

var db = moongose.connection

db.on("connected",
    ()=>{
        console.log("Mongoose Connected to" + mongoDB_URI)
    }
)
db.on("disconnected",
    ()=>{
    console.log("Mongoose Disconnected to" + mongoDB_URI)
    }
)
db.on("error",
    (error)=>{
        console.log("Mongoose Error:" + error)
    }
)