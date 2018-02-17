module.exports = function responseToUser(isSuccess, message, payload) {
    return { success: isSuccess, message: message, data: payload };
}