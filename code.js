// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
   if(typeof input !== 'string') return "Hello, World!";
    return 'Hello, ' + input + '!';
}
// if(input === undefined || input === true || input === false) return "Hello, World!";
//refactored simplified (ver 2******)

//   if(input === "Jane"){
//        return "Hello, Jane!"
//    }  else if(input === "Alex"){
//        return "Hello, Alex!"
//    } else {
//        return "Hello, Pat!";
//    }
// }
// original code solution (ver 1******) see line 10 for refactored simplified and the refer to line 5-9 for the...
// ...cleanest simplified code (final ver 3******)