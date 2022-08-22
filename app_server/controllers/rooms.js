const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}


const roomsList = (req, res) => {
    const path = '/api/rooms';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> roomsController.roomsList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderRoomsList(req, res, body);
        }
    );
};


const renderRoomsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Getaways - Rooms';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        repsonseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No rooms for you to stay at currently';
        }
    }
    res.render('rooms',
        {
                title: pageTitle,
                rooms: responseBody,
                message
        }
    );
}

module.exports = {
    roomsList
}