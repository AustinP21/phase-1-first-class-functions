const chai = 'chai spies' 
function receivesAFunction(callback) { alert(callback);
    callback(chai);        
}
function returnsANamedFunction(){
    return function nameFunciton(){

    }
}
function returnsAnAnonymousFunction() {
    return function(){
        
    }
}