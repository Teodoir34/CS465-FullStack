const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const reservationsController = require('../controllers/reservations');
const testimonialsController = require('../controllers/testimonials');
const postsController = require('../controllers/posts');

router
    .route('/register')
    .post(authController.register);

router
    .route('/login')
    .post(authController.login);

router  
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

router
    .route('/rooms')
    .get(roomsController.roomsList)   


router
    .route('/reservations')
    .get(reservationsController.reservationsFindByUser);
    
router
    .route('/testimonials')
    .get(testimonialsController.testimonialsList)

router
    .route('/testimonials/:limit')
    .get(testimonialsController.latestTestimonials)    

router
    .route('/posts')
    .get(postsController.postsList)   

router
    .route('/posts/featured')
    .get(postsController.featuredBlogPost)

router
    .route('/vacationTips')
    .get(postsController.vacationTipsList)

router
    .route('/vacationTips/:limit')
    .get(postsController.latestVacationTips)

router
    .route('/newsPosts')
    .get(postsController.newsPostsList)

router
    .route('/newsPosts/:limit')
    .get(postsController.latestNewsPosts)
    

module.exports = router;