const login = (req, res) => {

    //pageTitle = process.env.npm_package_description + ' - News';
    res.render('login', {title: "Travlr Getaways - Login"});
}

module.exports = {
    login
}