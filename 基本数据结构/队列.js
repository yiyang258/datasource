// 基于对象构造队列
// 队列的特点: 先入先出
class Queue {
    constructor () {
        this.count = 0;
        // 用于追踪第一个元素
        this.lowestCount = 0;
        this.items = {};
    }
    // 向队列的尾部增加新的项
    enqueue (element) {
        this.items[this.count] = element;
        this.count++;
    }
    // 检验队列是否为空
    isEmpty () {
        return this.count - this.lowestCount === 0;
    }
    // 移除队列的第一项
    dequeue () {
        if (this.isEmpty()) {
            return undefined;
        }
        delete this.items[this.lowestCount];
        this.lowestCount++;
    }
    // 查看对列的头部元素
    peek () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    // 查看对列的长度
    size () {
        return this.count-this.lowestCount;
    }
    // 清空对列
    clear () {
        this.isEmpty = {};
        this.count = 0;
        this.lowestCount = 0;
    }
}