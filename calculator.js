var readlineSync = require('readline-sync');
console.clear();
console.log("Geometric Plane Shapes");
console.log('Calculator');
console.log('..........................');
console.log('Press a for square');
console.log('Press b for rectangle');
console.log('Press c for triangle');
console.log('Press d for circle');
console.log('..........................');

var num = readlineSync.question('enter the number :');

switch(num){
    case 'a':
        console.log("square");
        var s = readlineSync.questionInt('Enter your value to square :');
        console.log(s*s);
        break;
    case 'b':
        console.log("rectangle");
        var x = readlineSync.questionInt('Enter the value of Length');
        var y = readlineSync.questionInt('Enter the value Breadth');
        console.log(x*y);
        break;
    case 'c':
        console.log("triangle")
        var x = readlineSync.questionInt('Enter the value of Length');
        var y = readlineSync.questionInt('Enter the value of Breadth');
        var z = readlineSync.questionInt('ENterthe value of Height');
        var s = (x + y + z) / 2; 
        var area = Math.sqrt(s * ((s - x) * (s - y) * (s - z)));
        console.log(area);
        break;
    case 'd':
        console.log("circle");
        var x = readlineSync.questionInt('Enter the value of Radius:');
        console.log(Math.PI*(x*x));
        break;
    }
