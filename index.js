const db=require('./db.json')


// import express
const express=require('express')

// create server app
const server=express()

server.listen(db,()=>{
    console.log('server startted working');
})
// import cors
const cors =require('cors')

// use server app and routes
server.use(cors())
server.use(express.json())
