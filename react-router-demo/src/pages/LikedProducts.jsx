import styles from './profile.module.css'
import likedProductsData from '../data/liked-products.json'

function LikedProducts() {

  return (
    <div className={styles.likedProducts}>
      <h1 className={styles.pageTitle}>我的收藏</h1>

      <div className={styles.productsGrid}>
        {likedProductsData.map(product => (
          <div key={product.id} className={styles.likedProductCard}>
            <div className={styles.productImage}>
              <img src={product.image} alt={product.name} />
              <button className={styles.unlikeButton}>❤️</button>
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>¥{product.price.toLocaleString()}</p>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productMeta}>
                <span className={styles.productCategory}>{product.category}</span>
                <span className={styles.likeDate}>收藏于 {product.likeDate}</span>
              </div>
            </div>
            <div className={styles.productActions}>
              <button className={styles.addToCartButton}>加入购物车</button>
              <button className={styles.viewDetailsButton}>查看详情</button>
            </div>
          </div>
        ))}
      </div>

      {likedProductsData.length === 0 && (
        <div className={styles.emptyState}>
          <p>暂无收藏商品</p>
        </div>
      )}
    </div>
  )
}

export default LikedProducts
