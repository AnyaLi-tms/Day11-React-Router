import { Link } from 'react-router'
import products from '../data/products.json'
import styles from './product.module.css'

function ProductDetail() {
  const productId = 1
  const product = products.find(p => p.id === productId)

  if (!product) {
    return (
      <div className='container section'>
        <h2>未找到该商品</h2>
        <Link to='/products' className={styles.backLink}>返回产品列表</Link>
      </div>
    )
  }

  return (
    <div className='container section'>
      <div className={styles.detailContainer}>
        <div className={styles.detailImageWrapper}>
          <img src={product.image} alt={product.name} className={styles.detailImage} />
        </div>
        <div className={styles.detailInfo}>
          <h1 className={styles.detailTitle}>{product.name}</h1>
          <div className={styles.detailPriceLarge}>¥{product.price.toLocaleString()}</div>
          <div className={styles.detailBadge}>{product.category}</div>
          <p className={styles.detailDesc}>{product.description}</p>
          <button className='card'>加入购物车</button>
          <div>
            <Link to='/products' className={styles.backLink}>← 返回产品列表</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
