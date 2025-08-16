/**
 * 02-promise-then-catch.js
 * Promise 的 then() 和 catch() 方法 - 练习题
 * 
 * 学习目标：
 * 1. 掌握 then() 方法的使用
 * 2. 掌握 catch() 方法的使用
 * 3. 学会处理成功和失败的情况
 */

console.log('=== Promise 的 then() 和 catch() 方法学习 - 练习题 ===\n');

// 练习1：then() 方法基础用法
function processData(data) {
  // TODO: 补全代码，返回一个Promise，使用then()处理数据
  // 要求：
  // 1. 返回 Promise.resolve(data)
  // 2. 在下一个then()中返回数据长度
  // 3. 如果data为空，返回 Promise.reject('数据为空')
}

// 测试基础then()用法
processData('hello world')
  .then(length => console.log('数据长度:', length))
  .catch(error => console.error('处理错误:', error));

// 测试错误处理
processData()
  .then(length => console.log('数据长度:', length))
  .catch(error => console.error('处理错误:', error)); // 处理错误: 数据为空

export default processData;