/**
 * Promise.all() 方法学习
 * 
 * 学习目标：
 * 1. 掌握 Promise.all() 的用法和特点
 * 2. 理解并行执行的概念
 * 3. 学会处理多个异步操作的场景
 * 4. 了解 Promise.all() 的失败机制
 */

console.log('=== Promise.all() 方法学习 ===\n');

// 1. Promise.all() 基本用法
console.log('1. Promise.all() 基本用法');

// 1.1 创建多个 Promise
const promise1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('  Promise 1 完成');
        resolve('结果1');
    }, 1000);
});

const promise2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('  Promise 2 完成');
        resolve('结果2');
    }, 800);
});

const promise3 = new Promise(resolve => {
    setTimeout(() => {
        console.log('  Promise 3 完成');
        resolve('结果3');
    }, 1200);
});

// 1.2 使用 Promise.all() 等待所有完成
console.log('  开始并行执行三个 Promise...');

function getAllPromise() {
    // TODO: 补全代码，使用 Promise.all() 等待所有完成
}

export default getAllPromise;

