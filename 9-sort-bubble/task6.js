const arr = [6, 10, 1, 7, 4, 5, 8, 3, 2, 9];
const typeSort = true;
console.log(arr);

function sort_booble(arr, typeSort) { 
    if (typeSort) {
        for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i < arr.length - j - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i+ 1];
                    arr[i + 1] = temp;
                }
            }
        }
    } else {
        for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i < arr.length - j - 1; i++) {
                if (arr[i] < arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i+ 1];
                    arr[i + 1] = temp;
                }
            }
        }
    }
    return arr;
}
console.log(sort_booble(arr, typeSort));