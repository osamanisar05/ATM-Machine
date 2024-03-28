////// Construction of ATM program including fast cash option and random amount!
import inquirer from "inquirer";
let My_Balance = 80000; //Dollars
let MY_Pin = 7890;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter your Pin Number : ",
        type: "number"
    }
]);
if (pinAnswer.Pin === MY_Pin) {
    console.log("You entered correct Pin Number .");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select options to perform : ",
            type: "list",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let fast_cash = await inquirer.prompt([
            {
                name: "option",
                message: "Please select your desired amount",
                type: "list",
                choices: ["5000", "10000", "15000", "20000", "Other Amount"]
            }
        ]);
        if (fast_cash.option === "5000") {
            My_Balance -= fast_cash.option;
            console.log("Your remaining balance is : " + My_Balance);
        }
        else if (fast_cash.option === "10000") {
            My_Balance -= fast_cash.option;
            console.log("Your remaining balance is : " + My_Balance);
        }
        else if (fast_cash.option === "15000") {
            My_Balance -= fast_cash.option;
            console.log("Your remaining balance is : " + My_Balance);
        }
        else if (fast_cash.option === "20000") {
            My_Balance -= fast_cash.option;
            console.log("Your remaining balance is : " + My_Balance);
        }
        else if (fast_cash.option === "Other Amount") {
            let amountans = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Please enter your amount : ",
                    type: "number"
                }
            ]);
            if (My_Balance < amountans.amount) {
                console.log("Insufficient Balance ! Kindly enter correct amount...");
            }
            else if (My_Balance >= amountans.amount)
                My_Balance -= amountans.amount;
            console.log("Your remaining balance is : " + My_Balance);
            console.log("Thank You for your Transaction :-) ");
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log("your balance is " + My_Balance, "Dollars");
    }
}
else {
    console.log("Incorrect Pin Number !");
}
