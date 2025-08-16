/**
 * 04-promise-error-handling.js 测试文件
 */

import { test, asyncTest, assert, assertEqual, showTestResults } from '../test-framework.js';

// 导入被测试的函数
import fetchData from '../04-promise-error-handling.js';

console.log('🧪 开始测试 04-promise-error-handling.js\n');

// 存储所有异步测试的Promise
const asyncTests = [];

// 测试1：fetchData函数返回Promise对象
test('fetchData返回Promise对象', () => {
  const result = fetchData();
  assert(result instanceof Promise, 'fetchData应该返回Promise对象');
});

// 测试2：fetchData函数在fetch失败时正确处理错误
asyncTests.push(
  asyncTest('fetchData在fetch失败时正确处理错误', async () => {
    // 模拟fetch失败的情况
    const errorMessage = await fetchData()
    assert(errorMessage.includes('请求失败'), '正常被拦截到错误');
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
