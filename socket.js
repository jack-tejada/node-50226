module.exports=(io)=>{
    io.on('connection',(socket)=>{
        console.log('Usuario conectado al servidor')
        socket.on('disconnect',()=>{
            console.log('Usuario desconectado del servidor')
        })
    })
}