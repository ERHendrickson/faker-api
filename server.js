import { faker } from '@faker-js/faker';
import express from 'express';
// const {faker} = require("@faker-js/faker");
// const express = require('express'); //created a variable called express that will store express

const app = express();
const port = 8000;

//In order to be able to access POST data, we need to be able to pull it out of the request object.
//To do this, we first have to add a new setting to our server.js file:
//make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
/** both express.urlencoded() and express.json() are Express middleware functions. They are responsible
 * for providing and parsing the request.body data.*/

class User {
    constructor(password, email, phoneNumber, lastName, firstName, _id){
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.lastName = lastName;
        this.firstName = firstName;
        this._id = _id;
    }
}

class Company{
    constructor(_id, name){
        this._id = _id;
        this.name = name;
        this.address = [street, city, state, zipCode, country];
    }
}

const createUser = () => {
    const newFakeUser = {
        _id: faker.datatype.uuid(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    }
    return newFakeUser;
}

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: [faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.address.country()]
    }
    return newFakeCompany;
}

// console.log(newFakeUser);

app.get('/api/users/new', (req,res) => {
    const newFakeUser = createUser();
    res.json({ newFakeUser});
});

app.get('/api/companies/new', (req, res) => {
    const newFakeCompany = createCompany();
    res.json({ newFakeCompany});
});

app.get('/api/user/company', (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    res.json({user: newFakeUser,
            company: newFakeCompany
    })
})


//line of code that actually runs our server on a specified port.
//this needs to be below the other code blocks
app.listen( port, () => console.log(`You have entered chamber : ${port} protect ya neck`) );