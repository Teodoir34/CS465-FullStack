const mongoose = require('mongoose');
const posts = mongoose.model('posts');

// GET: /posts
const postsList = async (req, res) => {
    posts
        .find({}) 
        .sort({"date": -1})
        .exec((err, posts) => {
                if (!posts) {
                    return res  
                        .status(404)
                        .json({ "message": "posts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(posts);
                }
        });
};

// GET: tips for the lists
const vacationTipsList = async (req, res) => {
    posts
        .find({category: "Vacation Tips"}) 
        .sort({"date": -1})
        .exec((err, posts) => {
                if (!posts) {
                    return res  
                        .status(404)
                        .json({ "message": "posts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(posts);
                }
        });
};

// GET: /vacationTips/:limit - get X number of vacqation tips, by most recent
const latestVacationTips = async (req, res) => {
    posts
        .find({category: "Vacation Tips"}) 
        .sort({"date": -1})
        .limit(parseInt(req.params.limit))
        .exec((err, posts) => {
                if (!posts) {
                    return res  
                        .status(404)
                        .json({ "message": "posts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(posts);
                }
        });
};

// GET: /newsPosts - list all blog posts with category of news
const newsPostsList = async (req, res) => {
    posts
        .find({category: "News"}) 
        .sort({"date": -1})
        .exec((err, posts) => {
                if (!posts) {
                    return res  
                        .status(404)
                        .json({ "message": "posts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(posts);
                }
        });
};

// GET: /newsPosts/:limit - get X number of news posts, by most recent
const latestNewsPosts = async (req, res) => {
    posts
        .find({category: "News"}) 
        .sort({"date": -1})
        .limit(parseInt(req.params.limit))
        .exec((err, posts) => {
                if (!posts) {
                    return res  
                        .status(404)
                        .json({ "message": "posts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(posts);
                }
        });
};


const featuredBlogPost = async (req, res) => {
    posts
        .find({featured: true}) 
        .sort({"date": -1})
        .limit(1)
        .exec((err, posts) => {
                if (!posts) {
                    return res  
                        .status(404)
                        .json({ "message": "feature blogPost not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(posts);
                }
        });
};


module.exports = {
    postsList,
    vacationTipsList,
    latestVacationTips,
    newsPostsList,
    latestNewsPosts,
    featuredBlogPost
};