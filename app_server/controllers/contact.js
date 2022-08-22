const contact = (req, res) => {

    //pageTitle = process.env.npm_package_description + ' - Contact';
    res.render('contact', {title: "Travlr Getaways - Contact"});
}

module.exports = {
    contact
}