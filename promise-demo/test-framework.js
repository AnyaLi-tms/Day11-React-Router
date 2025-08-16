/**
 * 测试框架 - 提供测试工具函数
 */

// 测试结果统计
const testResults = {
  total: 0,
  passed: 0,
  failed: 0,
  details: []
};

// 测试工具函数
function test(name, testFunction) {
  testResults.total++;
  console.log(`\n📋 测试: ${name}`);
  
  try {
    const result = testFunction();
    if (result === true || result === undefined) {
      console.log('  ✅ 通过');
      testResults.passed++;
      testResults.details.push({ name, status: 'PASSED' });
    } else {
      console.log('  ❌ 失败');
      testResults.failed++;
      testResults.details.push({ name, status: 'FAILED', error: result });
    }
  } catch (error) {
    console.log('  ❌ 异常:', error.message);
    testResults.failed++;
    testResults.details.push({ name, status: 'ERROR', error: error.message });
  }
}

// 异步测试工具函数
function asyncTest(name, testFunction) {
  testResults.total++;
  console.log(`\n📋 异步测试: ${name}`);
  
  return new Promise((resolve) => {
    testFunction()
      .then(result => {
        if (result === true || result === undefined) {
          console.log('  ✅ 通过');
          testResults.passed++;
          testResults.details.push({ name, status: 'PASSED' });
        } else {
          console.log('  ❌ 失败');
          testResults.failed++;
          testResults.details.push({ name, status: 'FAILED', error: result });
        }
        resolve();
      })
      .catch(error => {
        console.log('  ❌ 异常:', error.message);
        testResults.failed++;
        testResults.details.push({ name, status: 'ERROR', error: error.message });
        resolve();
      });
  });
}

// 断言函数
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || '断言失败');
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message || '断言失败'}: 期望 ${expected}，实际 ${actual}`);
  }
}

function assertDeepEqual(actual, expected, message) {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  if (actualStr !== expectedStr) {
    throw new Error(`${message || '断言失败'}: 期望 ${expectedStr}，实际 ${actualStr}`);
  }
}

// 显示测试结果汇总
function showTestResults() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 测试结果汇总');
  console.log('='.repeat(60));
  
  console.log(`总测试数: ${testResults.total}`);
  console.log(`通过: ${testResults.passed} ✅`);
  console.log(`失败: ${testResults.failed} ❌`);
  console.log(`成功率: ${((testResults.passed / testResults.total) * 100).toFixed(1)}%`);
  
  if (testResults.failed > 0) {
    console.log('\n❌ 失败的测试:');
    testResults.details
      .filter(test => test.status !== 'PASSED')
      .forEach(test => {
        console.log(`  - ${test.name}: ${test.status}`);
        if (test.error) {
          console.log(`    错误: ${test.error}`);
        }
      });
  }
  
  console.log('\n🎯 测试完成！');
  if (testResults.failed === 0) {
    console.log('🎉 恭喜！所有测试都通过了！');
  } else {
    console.log('💡 建议：仔细检查失败的测试，理解错误原因');
  }
}

// 重置测试结果
function resetTestResults() {
  testResults.total = 0;
  testResults.passed = 0;
  testResults.failed = 0;
  testResults.details = [];
}

// 导出测试工具
export {
  test,
  asyncTest,
  assert,
  assertEqual,
  assertDeepEqual,
  showTestResults,
  resetTestResults,
  testResults
};
