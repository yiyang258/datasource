// 要求以数组的形式返回字符串参数的所有排列组合
/**
 * 注意：
 *      字符串参数中的字符无重复且仅包含小写字母
 *      返回的排列组合数组不区分顺序
 */
const allsort = (string) => {
    // 存放结果的数组
    const result = [];
    // map结构
    const map = new Map();
    // 递归函数
    const dfs = (path) => {
        // 当长度等于原string的长度时,
        // 记录最后一个数据,然后结束循环
        if (path.length == string.length) {
            result.push(path)
            return
        }
        for (let i = 0; i < string.length; i++) {
            // 当map可以获取到string的值的时候继续
            if (map.get(string[i])) continue;
            // console.log(i,map);
            // 用true占位
            map.set(string[i], true)
            path += string[i]
            dfs(path)
            path = path.substring(0, path.length - 1)
            console.log(path);
            map.set(string[i], false)
        }
    }
    dfs('')
    return result
}
console.log(allsort('abcd'));