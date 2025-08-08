import { Link } from 'react-router';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          不值得买电商
        </Link>
        <nav className={styles.nav}>
          <Link to='/' className={styles.navLink}>
            首页
          </Link>
          <Link to='/about' className={styles.navLink}>
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
