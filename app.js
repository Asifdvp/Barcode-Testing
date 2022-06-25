// Elements
const form = document.querySelector(".form");
const input = document.querySelector(".barcode-input")

//event listeners
form.addEventListener("submit",handleSubmit);
input.addEventListener("input",max13);

//functions

//maximum 13 reqem yazılması üçün
function max13(e){
if(input.value.length > 13){
    input.value = input.value.slice(0,13)
}
}

//minimum 13
function min13(value){
    if(value.length<13){
        return true
    }
    
}

function sumNumbers(value){
let arr = value.split("");
let sumOdd = 0;
let sumEven = 0;
console.log(arr)
//odd sum 
try{
for(let i=0; i<arr.length-1; i++){
    if((i+1) % 2 == 0){
        sumOdd += Number(arr[i])
    }
        else{
          sumEven += Number(arr[i])
        }
       
}}
catch{
    console.log("Xəta var")
}
let multiple = sumOdd*3;
let sumMulti = multiple + sumEven;
let lastCharacter = Number(String(sumMulti)[String(sumMulti).length-1]);
console.log("Summ Odd:" + "  " +sumOdd);
console.log("Summ Even:" + "  " +sumEven);
console.log("Multiple 3 SumEven" + "  " + multiple) ;
console.log("Multiple 3 and sum SumOdd" + "  " + sumMulti) ;
console.log("lastCharacter" + "  " + lastCharacter) ;
if(10- lastCharacter == value[value.length-1]){
    alert("Barcode entered correctly")
    input.value = ""
}
else{
    alert("Input is incorrect information")
    input.value = ""
}

}




function handleSubmit(e){

    let value = input.value;
    if(   min13(value)){
        alert("Minimum 13 rəqəm daxil edin")
    }
    else{
        sumNumbers(value)
    }
 

e.preventDefault();


}