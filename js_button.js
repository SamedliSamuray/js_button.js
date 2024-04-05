let btn = document.getElementById("btn");
let num = 0;
let start = true;


//Metod 1 : if-else
// btn.addEventListener('click', function() {
//     if (start) {
//         if (num < 10) {

//             num++;
//             btn.innerHTML = `Click : ${num}`;

//             if(num==10){
//                 start=false;
//             }
//         } 
//     }
//      else {
//         if (num > 1) {
//             num--;
//             btn.innerHTML = `Click : ${num}`;

//             if(num==1) {
//                 start = true;
//             }
//         } 
//     }
// });


// Metod 2 : ternary operators

btn.addEventListener('click',function() {

    start?btn.innerHTML=(`Click :${++num}`):btn.innerHTML=(`Click :${--num}`);
    num==10?start=false:num==1?start=true:null;

})





