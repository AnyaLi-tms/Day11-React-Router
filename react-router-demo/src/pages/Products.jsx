import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import styles from './product.module.css';
import mockProducts from '../data/products.json';
import { useSearchParams } from 'react-router';

function Products() {
  const [products] = useState(mockProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || '全部';
  const searchTerm = searchParams.get('search') || '';

  // 获取所有分类
  const categories = ['全部', ...new Set(products.map(product => product.category))];

  // 过滤产品
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === '全部' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectedCategory = category => {
    // 处理异常和默认值
    if (!category || category === '全部') {
      setSearchParams({}); // 清空参数
    } else {
      setSearchParams({ category });
    }
  };

  const handleInputSearch = searchTerm => {
    const param = new URLSearchParams(searchParams);
    param.set('search', searchTerm);
    setSearchParams(param);
  };

  useEffect(() => {
    //console.log(searchParams.get('category'));
  }, [searchParams]);

  return (
    <div>
      <h1 className={styles.pageTitle}>产品列表</h1>

      <div className={styles.filters}>
        <div className={styles.searchBox}>
          <input
            type='text'
            placeholder='搜索产品...'
            value={searchTerm}
            onChange={e => handleInputSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div>
          <span className={styles.categoryLabel}>分类：</span>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? `${styles.categoryButton} ${styles.categoryButtonActive}`
                  : styles.categoryButton
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.resultCount}>共找到 {filteredProducts.length} 个产品</div>

      <div className={styles.productGrid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className={styles.emptyState}>
          <p>没有找到匹配的产品</p>
        </div>
      )}
    </div>
  );
}

export default Products;
