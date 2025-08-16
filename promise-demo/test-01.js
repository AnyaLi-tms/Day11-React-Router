/**
 * 01-basic-promise.js 测试文件
 */

import { test, asyncTest, assert, assertEqual, showTestResults } from './test-framework.js';

// 导入被测试的函数
import delay from './01-basic-promise.js';

console.log('🧪 开始测试 01-basic-promise.js\n');

// 存储所有异步测试的Promise
const asyncTests = [];

// 测试1：delay函数返回Promise对象
test('delay返回Promise对象', () => {
  const result = delay(100);
  assert(result instanceof Promise, 'delay应该返回Promise对象');
});

// 测试2：delay函数正确延迟
asyncTests.push(
  asyncTest('delay函数正确延迟', () => {
    const startTime = Date.now();
    return delay(100)
      .then(message => {
        const endTime = Date.now();
        const actualDelay = endTime - startTime;
        
        // 允许50ms的误差
        assert(actualDelay >= 90 && actualDelay <= 150, 
          `延迟时间应该在90-150ms之间，实际: ${actualDelay}ms`);
        
        assertEqual(message, '100毫秒后完成', '返回消息不正确');
        return true;
      });
  })
);

// 测试3：delay函数处理0延迟
asyncTests.push(
  asyncTest('delay函数处理0延迟', () => {
    const startTime = Date.now();
    return delay(0)
      .then(message => {
        const endTime = Date.now();
        const actualDelay = endTime - startTime;
        
        // 0延迟应该几乎立即执行
        assert(actualDelay <= 50, `0延迟应该几乎立即执行，实际: ${actualDelay}ms`);
        assertEqual(message, '0毫秒后完成', '返回消息不正确');
        return true;
      });
  })
);

// 测试4：delay函数处理长延迟
asyncTests.push(
  asyncTest('delay函数处理长延迟', () => {
    const startTime = Date.now();
    return delay(200)
      .then(message => {
        const endTime = Date.now();
        const actualDelay = endTime - startTime;
        
        // 允许50ms的误差
        assert(actualDelay >= 180 && actualDelay <= 250, 
          `延迟时间应该在180-250ms之间，实际: ${actualDelay}ms`);
        
        assertEqual(message, '200毫秒后完成', '返回消息不正确');
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
