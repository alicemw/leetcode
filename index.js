/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let len = nums.length
//     for(let i=0;i<len-1;i++){
//         for(let j=i+1;j<len;j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }
// };
var twoSum = function(nums, target) {
    let len = nums.length
    let map = {}
    for(let i=0;i<len;i++){
        map[nums[i]] = i
    }
    for(let j=0;j<len;j++){
        let diff = target - nums[j]
        if(map[diff] && map[diff] !== j){
            return [j, map[diff]]
        }
    }
};
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x + ''
    let target = ''
    for(let i=0;i<str.length;i++){
        target +=str[str.length -1]
    }
    return target
};