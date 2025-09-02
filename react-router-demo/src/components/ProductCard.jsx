import styles from '../pages/product.module.css'
import { Link } from 'react-router'

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.price}>¥{product.price.toLocaleString()}</p>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.cardFooter}>
        <span className={styles.badge}>{product.category}</span>
        <Link to={`/products/${product.id}`} className={styles.detailsButton}>查看详情</Link>
      </div>
    </div>
  )
}

export default ProductCard
