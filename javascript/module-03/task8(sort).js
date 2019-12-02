'use strict';

const arr = [6, 7, 8, 3, 4, 5];
const my_sort = (arr) => {
    let sortVar;
    let isArraySorted;
    do{
    isArraySorted=true;
    for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]) {
                sortVar=arr[i+1];
                arr[i+1]=arr[i];
                arr[i]=sortVar;
                isArraySorted=false;
                break;
            }
    }
}while(!isArraySorted)
    return [...arr];
}
const newArray = my_sort(arr);
newArray[0] = "!!!";
console.log(arr); //должен вывести 3 4 5 6 7 8
console.log(newArray); // должен !!!, 4 5 6 7 8

// 'use strict';

// const arr = [6, 7, 8, 3, 4, 5];
// const my_sort = (arr) => {
//     let sortVar;
//     for(let i=0;i<arr.length;i--){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]) {
//                 sortVar=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=sortVar;
//             }
//         }
//     }
//     return arr;
// }
// const newArray = my_sort(arr);
// newArray[0] = "!!!";
// console.log(arr); //должен вывести 3 4 5 6 7 8
// console.log(newArray); // должен !!!, 4 5 6 7 8