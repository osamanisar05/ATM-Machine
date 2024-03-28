//// Construction of ATM program Without fast cash and insufficient balance option.
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
//console.log(pinAnswer);
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
    //console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "Please enter your amount : ",
                type: "number"
            }
        ]);
        My_Balance -= amountans.amount;
        console.log("Your remaining balance is : " + My_Balance);
    }
    else if (operationAns.operation === "Check balance") {
        console.log("your balance is " + My_Balance);
    }
}
else {
    console.log("Incorrect Pin Number !");
}
