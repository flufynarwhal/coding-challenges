// Brute Force
// function maxSubArraySum(arr, num) {
//     if ( num > arr.length) {
//         return null
//     }
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i+j]
//         }
//         if (temp > max) {
//             max = temp
//         }
//     }
//     return max
// }


// sliding window approach

function maxSubArraySum(arr, num) {
    if (num > arr.length) return null


    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = maxSum - arr[i-num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}