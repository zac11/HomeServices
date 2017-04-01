var LoginPage =function(){
    var or = require('.../HomeServices/test_data/ObjectRepo.json');
    var servicePage = require('../ServicesPage.js');

    var usernameInput = element(by.id(or.loginpage.username));

    var passwordInput = element(by.id(or.loginpage.password));

    var loginButton = element(by.id(or.loginpage.loginbutton));


    this.login = function(id,password){
            console.log("Called Login Function");
            usernameInput.click();
            usernameInput.sendKeys(id);

            passwordInput.click();
            passwordInput.sendKeys(password);

            loginButton.click();
            return servicePage;

    };
};


module.exports = new LoginPage();