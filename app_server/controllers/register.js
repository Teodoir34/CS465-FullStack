const register = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - News';
    res.render('register', {title: "Travlr Getaways - Register"});
}

module.exports = {
    register
}