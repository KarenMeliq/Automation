
// Include the chrome driver 

/*require("chromedriver");


// Include selenium webdriver 

let swd = require("selenium-webdriver"); 

let browser = new swd.Builder(); 

let tab = browser.forBrowser("chrome").build();

let tabToOpen = tab.get("https://demoqa.com/text-box"); 

let assert = chai.assert;
let assertWord =tabToOpen.getElementsByTagName("title");
assert.equal(tabToOpen, 'https://demoqa.com/text-box');
if (assertWord.includes('ToolsQA')) { 
    console.log("assertWord") ;
  }*/


// Include the chrome driver 

require("chromedriver");


// Include selenium webdriver 

let webdriver = require("selenium-webdriver");

let browser = new webdriver.Builder();

let tab = browser.forBrowser("chrome").build();


// Get the credentials from the JSON file 

//let { email, pass } = require("credentials.json");


// Step 1 - Opening the geeksforgeeks sign in page 
let tabToOpen = tab.get("https://demoqa.com/text-box");

tabToOpen.then(function () {

        let findTimeOutP = tab.manage().setTimeouts({

                implicit: 5000, 

            });

        return findTimeOutP;

    })

    .then(function () {



        // Step 2 - Finding the username input 

        let promiseUsernameBox = tab.findElement(webdriver.By.id('userName'));
     
        return promiseUsernameBox;

    })

    .then(function (usernameBox) {



        // Step 3 - Entering the username 
        let userName = "TestName";
        let promiseFillUsername =  usernameBox.webdriver.sendKeys(userName);

        return promiseFillUsername;

    })

    .then(function () {

        console.log(

            "Username entered successfully in" +

            " OK "

        );



     // Step 4 - Finding the password input 

        let promisePasswordBox = tab.findElement(swd.By.css("#password"));

        return promisePasswordBox;

    })

    .then(function (passwordBox) {



        // Step 5 - Entering the password 

        let promiseFillPassword = passwordBox.sendKeys(pass);

        return promiseFillPassword;

    })

    .then(function () {

        console.log(

            "Password entered successfully in" 
           

        );



        // Step 6 - Finding the Sign In button 

        let promiseSignInBtn = tab.findElement(

            swd.By.css("")

        );

        return promiseSignInBtn;

    })

    .then(function (signInBtn) {



        // Step 7 - Clicking the Sign In button 

        let promiseClickSignIn = signInBtn.click();

        return promiseClickSignIn;

    })

    .then(function () {

        console.log("Successfully signed in GEEKSFORGEEKS!");

    })

    .catch(function (err) {

        console.log("Error ", err, " occurred!");

    });
