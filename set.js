

function mySet(){
    //the collection will hold the set
    var collection = [];
    //this will check the presence of element and returns true or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1 );
    };

    //values returns all the values in the set
    this.values = function () {
        return collection;
        
    };

}

var setA = new Set();
var setB= new Set();
setA.add('a');
setA.add('b');
setA.add('c');
setA.add('d');
setB.add('e');
setB.add('f');
setB.add('g');
setB.add('h');
console.log(setA);