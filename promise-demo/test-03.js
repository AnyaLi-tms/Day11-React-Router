/**
 * 03-async-await.js 测试文件
 */

import { test, asyncTest, assert, assertEqual, showTestResults } from './test-framework.js';

// 导入被测试的函数
import basicAsync from './03-async-await.js';

console.log('🧪 开始测试 03-async-await.js\n');

// 存储所有异步测试的Promise
const asyncTests = [];

// 测试1：basicAsync函数返回Promise对象
test('basicAsync返回Promise对象', () => {
  const result = basicAsync();
  assert(result instanceof Promise, 'basicAsync应该返回Promise对象');
});

// 测试2：basicAsync函数正确执行异步操作
asyncTests.push(
  asyncTest('basicAsync正确执行异步操作', () => {
    return basicAsync()
      .then(result => {
        assertEqual(result, '函数执行完成', '函数返回值不正确');
        return true;
      });
  })
);

// 测试3：basicAsync函数包含正确的日志输出
asyncTests.push(
  asyncTest('basicAsync包含正确的日志输出', () => {
    // 捕获console.log输出
    const originalLog = console.log;
    const logs = [];
    console.log = (...args) => {
      logs.push(args.join(' '));
    };
    
    return basicAsync()
      .then(result => {
        // 恢复console.log
        console.log = originalLog;
        
        // 检查是否包含预期的日志
        const logText = logs.join(' ');
        assert(logText.includes('开始执行异步函数'), '应该输出"开始执行异步函数"');
        assert(logText.includes('获取到结果:'), '应该输出"获取到结果:"');
        assert(logText.includes('1000毫秒后完成'), '应该包含delay函数的返回结果');
        
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
