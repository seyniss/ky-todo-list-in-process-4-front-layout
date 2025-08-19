const express = require("express")
const mongoose=require("mongoose")
const dotenv =require("dotenv")
const cors=require("cors")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors({  //CORS란 백엔드에서 프론트엔드의 요청을 허용하는 것
    // origin: "http://localhost:5173" // 프론트엔드의 주소를 명시적으로 지정
    // 위의 코드를 주석처리하고 아래와 같이 변경하면 .env 파일에서 FRONT_ORIGIN을 읽어옴
    origin: process.env.FRONT_ORIGIN,
    credentials: true   //쿠키 허용
}))


mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>console.log("MongoDB 연결 성공"))
    .catch((err)=>console.log("연결 실패",err))



const todoRoutes = require('./routes/todoRoutes')
app.use('/api/todos',todoRoutes)



app.get('/',(req, res)=>{
    res.send("Hello Express")
})

app.listen(PORT,()=>{
    console.log("Server is Running!")
})