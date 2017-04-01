var or = require('../test_data/ObjectRepo.json');
var env = require('../test_data/env_data.json');

var SubmitServReq = function(){
    this.submitReq = function(name,email, contact,address,description){
        element(by.id(or.serviceDesc.name)).sendKeys(name);
        element(by.id(or.serviceDesc.email)).sendKeys(email);
        element(by.id(or.serviceDesc.contact)).sendKeys(contact);
        element(by.id(or.serviceDesc.address)).sendKeys(address);
        element(by.id(or.serviceDesc.description)).sendKeys(description);

        element(by.xpath(or.serviceDesc.submitbutton)).click();

    };
};

module.exports = new SubmitServReq();