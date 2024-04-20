const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const parkdata= require('./models/bookingpark');
const UserLogin = require("./models/UserLogin");

require('./db/conn');

const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, '../public');
app.use(express.static(path.join(__dirname, "../public")));
// Increase the limit to accept larger payloads
app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Adjust the limit as needed
app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed

app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "../public/user_login.html"));
});

// Registration page ka route 
app.post('/UserLogin', async (req, res) => {

    try {
        const { firstName, lastName, email, Phone, dob, gender, address, district, state, country, pinCode, password } = req.body;

        const newUser = new UserLogin({
            firstName,
            lastName,
            email,
            Phone,
            dob,
            gender,
            address,
            district,
            state,
            country,
            pinCode,
            password
        });
        // Save the user to the database
        await newUser.save();
        // res.status(201).send("User registered successfully!");
        res.sendFile(path.join(staticPath, 'main.html'));
   
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }

});



// bookingparkingspot 

app.post("/parkdata", async (req, res) => {
    try {
        const { name, contact, vehicleNumber, location } = req.body;

        // Save booking data to the database
        const newBooking = new parkdata({
            name,
            contact,
            vehicleNumber,
            
        });

        await newBooking.save();
        res.sendFile(path.join(staticPath, 'searching.html'));
        // res.status(201).send("Booking successful!");
    } catch (error) {
        console.error('Error booking parking spot:', error);
        res.status(500).send('Error booking parking spot');
    }
});
app.post("/Login", async (req, res) => {
    try {
        const { email, password, captchaInput, captcha } = req.body;

        const user = await UserLogin.findOne({ email });

        if (!user || user.password !== password) {
            return res.send('<script>alert("Invalid email or password"); window.location.href = "/";</script>');
        } else if (captchaInput !== captcha) {
            return res.send('<script>alert("Invalid captcha"); window.location.href = "/";</script>');
        }
        res.sendFile(path.join(staticPath, 'main.html'));
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

