let getPage = document.getElementById("applications")
let editUser = document.createElement('input')
editUser.id = "binaryNum"

let confirmBinary = document.createElement("button")
getPage.appendChild(editUser)
getPage.append(confirmBinary)



let userInput = require('readline-sync')
let userBinary = userInput.question("Enter Binary")
let val = checkForCharacters(userBinary.toString())
let u = calculate(userBinary)
if ( (isNaN(u))|| (u > 1)){
  return (console.log("User should enter a number between 0 and 1"))
}
console.log(u)

function handleSubmit(userInput){

}
function checkForCharacters(userBinary){
  let characterFound = userBinary.search(["/^[01]+$"]) //This regex only searches for 0's and 1's
  return characterFound !== -1; // If the character finds -1 then it will return true
}
function calculate(userBinary){
  let total = 0
  /*the exponent is equal to the length of the string - 1.
    The last value in the exponent is 0 so we have to count down to zero
    from the length of the string - 1 to zero
   */
    for (let exponent = userBinary.length - 1; exponent >= 0 ; exponent--)
    {
      let num = parseInt(userBinary.charAt(userBinary.length - 1 - exponent));
      total += num * Math.pow(2, exponent)
    }
  return total;
}
