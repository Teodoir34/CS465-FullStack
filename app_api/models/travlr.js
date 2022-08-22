const mongoose = require('mongoose');

//Define the trip schema
const tripSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true},
    name: {type: String, required: true, index: true},
    length: {type: String, required: true},
    start: {type: Date, required: true},
    resort: {type: String, required: true},
    perPerson: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}
});

//Define the rooms schema
const roomsSchema = new mongoose.Schema({
    name: {type: String, required: true, index: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    rate: {type: String, required: true}

});


//Define the reservations schema
const reservationsSchema = new mongoose.Schema({
    user: {type: String, required: true, index: true},
    code: {type: String, required: true, index: true},
    name: {type: String, required: true, index: true},
    length: {type: String, required: true},
    start: {type: Date, required: true},
    resort: {type: String, required: true},
    perPerson: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}
});

//Define the posts schema
const postsSchema = new mongoose.Schema({
    name: {type: String, required: true, index: true},
    date: {type: Date, required: true, index: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    featured: {type: Boolean, required: true}
});

//Define the testimonials schema
const testimonialsSchema = new mongoose.Schema({
    date: {type: Date, required: true, index: true},
    customer: {type: String, required: true, index: true},
    comment: {type: String, required: true},
});



mongoose.model('trips', tripSchema);
mongoose.model('rooms', roomsSchema);
mongoose.model('reservations', reservationsSchema);
mongoose.model('posts', postsSchema);
mongoose.model('testimonials', testimonialsSchema);