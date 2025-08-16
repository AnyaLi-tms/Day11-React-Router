async function fetchData() {
  // TODO: 补全代码，捕获异常 console.error("请求失败:", error.message);
  const response = await fetch("/api/data");
  const data = await response.json();
  return data;
}

fetchData();

export default fetchData;