var readlineSync = require('readline-sync');
console.clear();
console.log("Geometric Plane Shapes");
console.log('Cal');
console.log('..........................');
console.log('Press 1 for square');
console.log('Press 2 for rectangle');
console.log('Press 3 for triangle');
console.log('Press 4 for circle');
console.log('..........................');

var num = readlineSync.question('enter the number :');

switch(num){
    case '1':
        console.log("square");
        var s = readlineSync.questionInt('Enter your value to square :');
        console.log(s*s);
        break;
    case '2':
        console.log("rectangle");
        var x = readlineSync.questionInt('Enter the value of Length');
        var y = readlineSync.questionInt('Enter the value Breadth');
        console.log(x*y);
        break;
    case '3':
        console.log("triangle")
        var x = readlineSync.questionInt('Enter the value of Length');
        var y = readlineSync.questionInt('Enter the value of Breadth');
        var z = readlineSync.questionInt('ENterthe value of Height');
        var s = (x + y + z) / 2; 
        var area = Math.sqrt(s * ((s - x) * (s - y) * (s - z)));
        console.log(area);
        break;
    case '4':
        console.log("circle");
        var x = readlineSync.questionInt('Enter the value of Radius:');
        console.log(Math.PI*(x*x));
        break;
    }
Footer