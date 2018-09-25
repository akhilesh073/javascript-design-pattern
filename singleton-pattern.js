// The principle is simple for a singleton pattenr
// Create an instance iff instance is not exist, else return the existing instance

let mySingleton = (function(){
    //instance variable
    let instance;
    
    //function to instantiate the singletonObject
    function init(){
         
        function privateMethod(){
            console.log("I am a private method");
        }
        
        let privateVariable = "I am a private variable";
        
        let privateRendomVariable = Math.random();

        return {
            publicMethod: function(){
                console.log("I am a public method");    
            },
            publicVariable: "I am a public variable",
            getRandomNumber: function(){
                return privateRendomVariable;
            }
        };

    }
    return {
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };
})();

let firstInstance = mySingleton.getInstance();
let secondInstance = mySingleton.getInstance();

console.log("are the objects firstInstance and secondInstance same? ", firstInstance === secondInstance ? true : false);