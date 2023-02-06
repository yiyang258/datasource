// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    // 构造一个栈
    class Stack {
        constructor () {
            this.items = [];
        }
        // 添加新元素到栈顶
        push (element) {
            this.items.push(element);
        }
        // 从栈中移除元素,从末尾删除元素
        pop () {
            return this.items.pop();
        } 
        // 查看栈顶元素
        peek () {
            return this.items[this.items.length - 1];
        }
        // 检查栈是否非空
        isEmpty () {
            return this.items.length === 0;
        }
        // 返回栈的长度
        size () {
            return this.items.length
        }
        // 清空栈元素
        clear () {
            this.items = [];
        }
    }
     
};