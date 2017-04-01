var BasePage=function(){
    this.navigatetoURL=function(url){
        browser.get(url);
        browser.manage().window().maximize();
    };


    this.getPageTitle=function(){
        return browser.getTitle();
    };
};


module.exports = new BasePage();