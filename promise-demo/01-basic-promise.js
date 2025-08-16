// 练习1：基础封装 - 将setTimeout包装成Promise
function delay(ms) {
  // TODO: 补全代码，返回一个Promise
}
// 测试基础功能
delay(1000)
  .then(message => console.log('基础测试:', message)) // 1秒后输出 "1000毫秒后完成"
  .catch(error => console.error('基础测试错误:', error));

export default delay;