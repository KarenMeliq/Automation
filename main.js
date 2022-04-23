/*Working with string*/

//let myCountries = ["USA", "Russia", "Armenia", "Georgia"];

/*let myMixedArray=["Karen",56,true,null];
myCountries[1] = "Iran";
myCountries.push("Russia");
myCountries.unshift("India");
console.log(myCountries);
let poElement = myCountries.pop();
console.log(poElement);
myCountries.unshift(poElement);
console.log(myCountries);*/


/*console.log(myCountries.length);
let people = [
    ["Jhone","George","Miko","Woolf"],
    ["Monik", "Nicole","Julia","Jane"]
];
let fullArray = people[0].concat(people[1]);
console.log(fullArray);*/

//working with dictionaries

/*let companies = {
    Microsoft:1950,
    Google:2004,
    Amazone:[2002,"Jeff Bexos","USA"],
    facebook:{
        year:2005,
        owner:"Mark Zukerberg",
        country:"USA"
    },
    IBN:1985,

}
//companies.Google = 1988;
companies.Amazone.push("LA");
console.log(companies);*/

// Working with loops

let myCountries = ["USA", "Russia", "Armenia", "Georgia"];

/*for(let i=0; i<=myCountries.length; i++) 
{
    console.log(myCountries[i]);
}*/

/*for(let country of myCountries){
    console.log(country);
}*/

/*let i=0;

while (i<=10){

    console.log(i);
    i++;
}*/

//Working with if else 

/*if(false){
    console.log("right");
}
else{
    console.log("wrong");
}*/


/*let i=0;

while (i<=20){
    if( (i>3 && i<8) || i == 5){

        console.log("The value is greater 3 and less 8");

    }else{
        console.log(i);
 
    }
    i++;    
}*/

//Working with sitch cases

/*let myOption = "test1";

switch(myOption){
    case "test":
        console.log("Go to home page");
        break;
    case 2:
        console.log("Go to contact page");
        break;
    case 3:
        console.log("Go to menu page");
        break;
    default:
        console.log("Wrong option");    
}*/


// Working with functions

/*function say_hello(name, country){
    console.log("Hello" + " " + name + " " + country);
}

say_hello("Julie","USA");*/

/*function addNumbers(number1,number2){
   
    return number1+number2;
}
let num1 = Number(prompt());
let num2 = Number(prompt());
let result = addNumbers(num1,num2);

console.log(result);*/

/*class Account{

    constructor(firstName, lastname, email, password){

        this.first_Name = firstName;
        this.last_Name = lastname;
        this.email = email;
        this.password = password;
    }
    getFullName(){
        return this.first_Name + " " + this.last_Name;
    }
    getInfo(){
        console.log(`
        First name is ${this.first_Name}\n
        Last name is ${this.last_Name}\n
        Email is ${this.email}
        `
        );
    }


}
let Account1 = new Account("tetsName","testLastname","testemail@gmail.com","Passs");
/*console.log(Account1);
console.log(Account1.last_name);
console.log(Account1.getFullName());
Account1.getInfo();

let Account2 = new Account("John", "Merik", "JhonMerik@gmail.com","Pasword2");
Account2.getInfo();*/

//Working with try catch block
//let personaIncognito = "ideaFix"
try{
    
    console.log(personaIncognito);


}catch(e){

    if(e instanceof TypeError){ 

        console.log("Type error ...")

    }else if (e instanceof ReferenceError){
        console.log("Reference error ... ")

    }else{

    console.log(e)

    }
}finally {

    console.log("Execute this part ... ");
}
//console.log("Continue ...");

