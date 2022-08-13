var number=5;
console.log(testFunction(number));
function testFunction (number){
    if (typeof number == "undefined"){
        console.log("this is not an number")
    }
    else if(typeof number == "number") return number * 5 ;
}
