const fs=require('fs')
const http=require('http');
// const { error } = require('console');


const server=http.createServer()

server.on('request',(req,res)=>{
const rstream=fs.createReadStream('input.txt')

// 3rd way
rstream.pipe(res,(data)=>{
    console.log(data)
})

// rstream.on('data',(chunkdata)=>{
//     res.write(chunkdata.toString())
//     console.log(chunkdata.toString())
  
// })
// rstream.on('end',()=>{
//     res.end()
// })
// rstream.on('error',(err)=>{
//     console.log(err)
//     res.end('file not found')
// })
    })



server.listen(80,()=>{
    console.log('listening')
})