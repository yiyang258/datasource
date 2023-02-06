// 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。

// 特殊思路排序字符串,然后比较第一项和最后一项
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var longestCommonPrefix = function(strs) {
        let result = ''
        if(strs.length ===1){
            result = strs[0]
            return result
        }else{
            for (let i = 0; i < strs[0].length; i++) {
                let temp = strs[0][i]
                if(strs.every(el=>{
                    return el.charAt(i) == temp
                })){
                    result += temp
                }else{
                    break
                }
            }
        return result    
      }
    };
};
longestCommonPrefix(["abab","aba","abc"])