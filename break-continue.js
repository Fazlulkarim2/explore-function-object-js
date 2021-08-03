// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// for ( var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i > 7) {
//         break;
//     }
// }

var numbers = [53, 85, 94, 780, 68, 3, 8, 10];
// for (i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);

//     if (number > 80) {
//         break;
//     }
// }

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}
