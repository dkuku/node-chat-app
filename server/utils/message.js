var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    }
};

var generateLocationMessage = (from, lat, lng) => {
    var locationLink = `https://www.google.com/maps?q=${lat},${lng}`; 
    return {
        from,
        url: locationLink,
        createdAt: new Date().getTime()
    };
}

module.exports = {generateMessage, generateLocationMessage};
