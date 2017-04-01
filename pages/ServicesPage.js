var or = require('.../test_data/ObjectRepo.json');
var servReqPage = require('./SubmitServReq.js');

var ServicesPage=function(){
    this.selectRepairService = function(){
        element(by.name(or.servicePage.repairService)).click();
        return servReqPage;
    };
};

module.exports = new ServicesPage();