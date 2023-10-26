let messageDataSources = require('../sources/firebase/chats');
const initRealTime = {}

initRealTime.init = (socket, userId) => {
    console.log('initRealTime', userId);
    socket.join(userId);
    socket.on('createRoom', function (room) {
        console.log('createRoom', room);
        console.log(socket.rooms.has(room));
        socket.join(room);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });

    socket.on('setMessageVisualized', function (data) {
        console.log('setMessageVisualized', data);
        messageDataSources.updateMessage(data.condominiumCode, data.chatId, userId, data.message);
    });

    socket.on('listenMessages', function (data) {
        console.log('server listen message', data.condominiumCode);
        var callbackNewMessages = messageDataSources.listenNewMessages(data.condominiumCode, data.chatId, userId, socket);
        var callbackChangedMessages = messageDataSources.listenChangedMessages(data.condominiumCode, data.chatId, userId, socket);
        socket.on('disconnect', () => {
            console.log('disconnected from listenMessages '+userId);
            messageDataSources.unlistenNewMessages(data.condominiumCode, data.chatId, callbackNewMessages);
            messageDataSources.unlistenChangedMessages(data.condominiumCode, data.chatId, callbackChangedMessages);
        });
        socket.on('remove/message', function() {
            console.log('disconnected from listenMessages '+userId);
            messageDataSources.unlistenNewMessages(data.condominiumCode, data.chatId, callbackNewMessages);
            messageDataSources.unlistenChangedMessages(data.condominiumCode, data.chatId, callbackChangedMessages);
        });
    });

    socket.on('listenChats', function (data) {
        console.log('server listen chats', data.condominiumCode, userId);
        var callbackNewChats = messageDataSources.listenNewChats(data.condominiumCode, userId, socket);
        var callbackChangedChats = messageDataSources.listenChangedChats(data.condominiumCode, userId, socket);
        socket.on('disconnect', () => {
            console.log('disconnected from listenChats '+userId);
            messageDataSources.unlistenNewChats(data.condominiumCode, userId, callbackNewChats);
            messageDataSources.unlistenChangedChats(data.condominiumCode, userId, callbackChangedChats);
        });

        socket.on('remove/chats', function() {
            console.log('disconnected from listenChats '+userId);
            messageDataSources.unlistenNewChats(data.condominiumCode, userId, callbackNewChats);
            messageDataSources.unlistenChangedChats(data.condominiumCode, userId, callbackChangedChats);
        }
        );
    });
}

module.exports = initRealTime