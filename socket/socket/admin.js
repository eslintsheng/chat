module.exports = (socket) => {
  var dataList = {}
  dataList[socket.id] = socket.id
  socket.broadcast.emit("receiveMsg", '欢迎用户' + socket.id);
  socket.emit("receiveMsg", '欢迎用户' + socket.id);
  socket.on('sendMsg', data => {
    console.log(data, '用户输入')
    socket.broadcast.emit("receiveMsg", data.msg);
    socket.emit("receiveMsg", data.msg);
  })
  socket.on('disconnect', async (data) => {
    if (dataList[socket.id]) {
      delete dataList[socket.id]
      socket.broadcast.emit("receiveMsg", socket.id.slice(0, 5) + '跑路了');
    }
  })
  socket.on('breakOnline', async () => {
    console.log('收到断开链接请求')
    socket.emit("receiveMsg", '我要断开连接了')
    socket.disconnect()
  })
}