import { faker } from '@faker-js/faker';
const express = require('express'); //created a variable called express that will store express

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
    constructor(_id, name, address){
        this._id = _id;
        this.name = name;
        this.address = address;
    }
}