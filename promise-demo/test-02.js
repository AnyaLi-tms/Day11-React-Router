/**
 * 02-promise-then-catch.js 测试文件
 */

import { test, asyncTest, assert, assertEqual, showTestResults } from './test-framework.js';

// 导入被测试的函数
import processData from './02-promise-then-catch.js';

console.log('🧪 开始测试 02-promise-then-catch.js\n');

// 存储所有异步测试的Promise
const asyncTests = [];

// 测试1：processData函数返回Promise对象
test('processData返回Promise对象', () => {
  const result = processData('test');
  assert(result instanceof Promise, 'processData应该返回Promise对象');
});

// 测试2：processData正确处理有效数据
asyncTests.push(
  asyncTest('processData正确处理有效数据', () => {
    return processData('hello world')
      .then(length => {
        assertEqual(length, 11, '字符串长度计算不正确');
        return true;
      });
  })
);

// 测试3：processData处理数字
asyncTests.push(
  asyncTest('processData正确处理数字', () => {
    return processData('12345')
      .then(length => {
        assertEqual(length, 5, '数字字符串长度应该是5');
        return true;
      });
  })
);

// 测试4：processData处理特殊字符
asyncTests.push(
  asyncTest('processData正确处理特殊字符', () => {
    return processData('!@#$%')
      .then(length => {
        assertEqual(length, 5, '特殊字符长度应该是5');
        return true;
      });
  })
);

// 测试5：processData处理undefined参数
asyncTests.push(
  asyncTest('processData正确处理undefined参数', () => {
    return processData(undefined)
      .catch(error => {
        assertEqual(error, '数据为空', 'undefined参数应该返回"数据为空"错误');
        return true;
      });
  })
);

// 测试6：processData处理null参数
asyncTests.push(
  asyncTest('processData正确处理null参数', () => {
    return processData(null)
      .catch(error => {
        assertEqual(error, '数据为空', 'null参数应该返回"数据为空"错误');
        return true;
      });
  })
);

// 测试7：processData处理0参数
asyncTests.push(
  asyncTest('processData正确处理0参数', () => {
    return processData(0)
      .catch(error => {
        assertEqual(error, '数据为空', '0参数应该返回"数据为空"错误');
        return true;
      });
  })
);

// 测试8：processData处理false参数
asyncTests.push(
  asyncTest('processData正确处理false参数', () => {
    return processData(false)
      .catch(error => {
        assertEqual(error, '数据为空', 'false参数应该返回"数据为空"错误');
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
