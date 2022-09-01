const { App } = require("uWebSockets.js");
const { Server } = require("socket.io");
const adminUser = require("./socket/admin");
const port = 3008
const app = new App();
const io = new Server({ cors: true });
io.attachApp(app);

var admin = io.of("/admin")
const onConnection = (socket) => {
    adminUser(socket);
}
io.on("connection", onConnection);
admin.on("connection", onConnection);
app.listen(port, (token) => {
    console.log('启动服务==>socket', port)
    if (!token) {
        console.warn("port already in use");
    }
});
const express = require('express')
const routeApp = express()
routeApp.use(express.json())
routeApp.use(express.urlencoded({ extended: true }))
routeApp.use(require('cors')());

const userRoute = require('./routes/user')
routeApp.use('/api/user', userRoute)


routeApp.listen(3003, () => {
    console.log('启动服务==>api')
})