import express from 'express';
import router from './src/router/filme.js';

const app = express();
app.use(express.json());


app.use("/filme", filmeRouter)




app.listen(3000,() =>{
    console.log("servidor rodando na porta 3000")

})