var ContactController = {
    submitContactDetails: (req, res) => {
        const requestBody = req.body;
        console.log(requestBody);
        res.send('Contact Details Send Successfully...!');
    }
}

module.exports = ContactController;
