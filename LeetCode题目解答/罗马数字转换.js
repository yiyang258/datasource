// 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
// 给定一个罗马数字，将其转换成整数。

/**
 * @param {string} s
 * @return {number}
 */
// s 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')
 var romanToInt = function(s) {
    // 构造哈希map
    const hashmap = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    };
    let resNum = ''
    // 遍历匹配哈希
    for (let i = 0; i < s.length; i++) {
        // 如果后一个比前一个大,说明要减去前一个
        if (hashmap[s[i]] < hashmap[s[i+1]]) {
            resNum -= hashmap[s[i]]
        //  否则直接拼接即可 
        }else{
            resNum += hashmap[s[i]]
        }
    }
    // return resNum;
    console.log(resNum);
};
romanToInt('XC')