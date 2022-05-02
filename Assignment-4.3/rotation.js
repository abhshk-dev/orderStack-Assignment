/*
An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. 

For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array “A”  “K” times; that is, each element of A will be shifted to the right K times.

Any programming language of your choice. Solution in JavaScript is preferred but any other programming language works too.

Write a function that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

function solution(A, K);

For example, given
    A = [3, 8, 9, 7, 6]
    K = 3

Three rotations were made:
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

the function should return [9, 7, 6, 3, 8]. 

*/

function solution(array,K){
    for(let i=0;i<K;i++){
        array.unshift(array.pop());
    }
    return console.log(array);
}

solution([3,8,9,7,6],3);


// Some test cases.

// solution([3,8,9,7,6],2)=> [7,6,3,8,9]
// solution([1,4,5,6,7],4)=> [4,5,6,7,1]