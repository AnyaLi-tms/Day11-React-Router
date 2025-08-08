import styles from './profile.module.css'
import purchasedProductsData from '../data/purchased-products.json'

function PurchasedProducts() {

  return (
    <div className={styles.purchasedProducts}>
      <h1 className={styles.pageTitle}>购买记录</h1>

      <div className={styles.productsList}>
        {purchasedProductsData.map(product => (
          <div key={product.id} className={styles.productItem}>
            <div className={styles.productImage}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>¥{product.price.toLocaleString()}</p>
              <div className={styles.orderDetails}>
                <span className={styles.orderNumber}>订单号：{product.orderNumber}</span>
                <span className={styles.purchaseDate}>购买时间：{product.purchaseDate}</span>
                <span className={`${styles.status} ${styles.statusCompleted}`}>
                  {product.status}
                </span>
              </div>
            </div>
            <div className={styles.productActions}>
              <button className={styles.actionButton}>查看详情</button>
              <button className={styles.actionButton}>再次购买</button>
            </div>
          </div>
        ))}
      </div>

      {purchasedProductsData.length === 0 && (
        <div className={styles.emptyState}>
          <p>暂无购买记录</p>
        </div>
      )}
    </div>
  )
}

export default PurchasedProducts
