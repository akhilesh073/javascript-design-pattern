// module pattern is usually creating an object using object literal and maintaining encapsulating the variables from the outer world
// and exposing them through functions



/*  First example:


let testModule = (function(){
    let counter = 0;
    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: function() {
            console.log(`Previous counter value = ${counter}`);
            counter = 0;
        }
    };
})();

testModule.incrementCounter();
testModule.incrementCounter();
testModule.resetCounter(); 

*/

let myModule = (function(){
    let privateVariable = "private variable";
    let privateFunction = function() {
        console.log("Hii.. I am private function");
    };

    return {
        publicVariable: "public variable",
        publicFunction: function(){
            console.log("Hii.. I am public function ! ");
        }
    }
})();

console.log(myModule.privateVariable); // will print undefined as the private variable is not exposed to the outer world
// myModule.privateFunction(); // Will throw error "myModule.privateFunction is not a function"  as the privateFunction is not exposed to the outer world.
console.log(myModule.publicVariable);
myModule.publicFunction();

