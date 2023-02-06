// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 例如，121 是回文，而 123 不是。
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // console.log(String(x).split('').reverse().join(''));
    // 将数字转换为字符串,再转换为数组
    let string = (x + '').split('');
    // console.log(string);
    // 反转数组,并转换为string
    let newstring = string.reverse().join('');
    if (newstring == x) {
        return true
    }else{
        return false
    }
};

isPalindrome(1231)

