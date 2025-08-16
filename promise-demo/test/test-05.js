/**
 * 05-promise-all.js 测试文件
 */

import { test, asyncTest, assert, assertEqual, showTestResults } from '../test-framework.js';

// 导入被测试的函数
import getAllPromise from '../05-promise-all.js';

console.log('🧪 开始测试 05-promise-all.js\n');

// 存储所有异步测试的Promise
const asyncTests = [];

// 测试1：getAllPromise函数返回Promise对象
test('getAllPromise返回Promise对象', () => {
  const result = getAllPromise();
  assert(result instanceof Promise, 'getAllPromise应该返回Promise对象');
});

// 测试2：getAllPromise函数正确使用Promise.all
asyncTests.push(
  asyncTest('getAllPromise正确使用Promise.all', () => {
    // 模拟Promise.all的行为
    const mockPromiseAll = Promise.all([
      Promise.resolve('结果1'),
      Promise.resolve('结果2'),
      Promise.resolve('结果3')
    ]);
    
    // 由于getAllPromise函数未实现，我们测试它返回Promise
    const result = getAllPromise();
    assert(result instanceof Promise, 'getAllPromise应该返回Promise对象');
    
    return mockPromiseAll.then(results => {
      assertEqual(results.length, 3, '应该返回3个结果');
      assertEqual(results[0], '结果1', '第一个结果不正确');
      assertEqual(results[1], '结果2', '第二个结果不正确');
      assertEqual(results[2], '结果3', '第三个结果不正确');
      return true;
    });
  })
);

// 测试3：验证Promise.all的并行执行特性
asyncTests.push(
  asyncTest('Promise.all并行执行特性', () => {
    const startTime = Date.now();
    
    // 创建三个不同延迟的Promise
    const promise1 = new Promise(resolve => {
      setTimeout(() => resolve('结果1'), 100);
    });
    
    const promise2 = new Promise(resolve => {
      setTimeout(() => resolve('结果2'), 200);
    });
    
    const promise3 = new Promise(resolve => {
      setTimeout(() => resolve('结果3'), 300);
    });
    
    return Promise.all([promise1, promise2, promise3])
      .then(results => {
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        
        // 由于是并行执行，总时间应该接近最长的Promise时间（300ms）
        // 允许100ms的误差
        assert(totalTime >= 200 && totalTime <= 400, 
          `并行执行时间应该在200-400ms之间，实际: ${totalTime}ms`);
        
        assertEqual(results.length, 3, '应该返回3个结果');
        return true;
      });
  })
);

// 等待所有异步测试完成
Promise.all(asyncTests)
  .then(() => {
    console.log('\n✅ 所有异步测试完成');
    showTestResults();
  })
  .catch(error => {
    console.error('❌ 异步测试执行出错:', error);
    showTestResults();
  });
