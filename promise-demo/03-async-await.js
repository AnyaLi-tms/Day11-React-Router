/**
 * 11-async-await.js
 * async/await 语法学习
 * 
 * 学习目标：
 * 1. 掌握 async/await 的基本语法
 * 2. 理解 async/await 与 Promise 的关系
 * 3. 学会使用 async/await 简化异步代码
 * 4. 掌握错误处理的最佳实践
 */
import delay from './01-basic-promise.js';

console.log('=== async/await 语法学习 ===\n');

// 1. async/await 基本语法
console.log('1. async/await 基本语法');

// TODO: 将 basicAsync 改为 async 函数，并调用 delay
function basicAsync() {
    console.log('  开始执行异步函数');
    // 等待 Promise 完成
    delay(1000);
    // 1秒后输出
    console.log('  获取到结果:', result);
    
    return '函数执行完成';
}

// 调用异步函数
basicAsync().then(result => {
    console.log('  异步函数返回:', result);
});

export default basicAsync;