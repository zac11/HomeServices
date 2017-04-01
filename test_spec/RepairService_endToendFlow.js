describe('End to End flow of repair service',()=>{
    var basePage = require('../pages/BasePage.js');
    var env = require('../test_data/env_data.json');

    beforeEach(function(){
        basePage.navigateToURL(env.url);
    });

        it("should launch the website",()=>{
            browser.manage().timeouts().implicitlyWait(60000);
            console.log(env.url);

            var PageTitle = basePage.getPageTitle();
            expect(PageTitle).toContain("At Home Services");

        });

        var loginPage = require('../pages/LoginPage.js');

        it("should Login to Home page and request a service",()=>{
            console.log("2nd IT Block");
            var servicePage = loginPage.login(env.login,env.password);

            var servDescPage = servicePage.selectRepairService();

             servDescPage.submitReq("Vikas","vikas@sgmail.com","9999000111","13th avenue Bangalore","Need desktop repairwork");
          browser.sleep(3000);
        });
});