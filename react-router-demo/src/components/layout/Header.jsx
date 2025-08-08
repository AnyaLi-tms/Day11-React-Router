import { Link } from 'react-router'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <Link to='/' className={styles.link}>首页</Link>
          <Link to='/about' className={styles.link}>关于</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
