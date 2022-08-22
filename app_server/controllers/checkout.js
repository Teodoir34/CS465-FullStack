const checkout = (req, res) => {

    //pageTitle = process.env.npm_package_description + ' - Checkout';
    res.render('checkout', {title: "Travlr Getaways - Checkout"});
}

module.exports = {
    checkout
}