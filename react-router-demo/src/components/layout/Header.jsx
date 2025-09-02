import { Link, NavLink } from 'react-router';
import styles from './Header.module.css';

function Header() {
  const activeClassName = (defaultClassName, isActive) => {
    const className = [defaultClassName];
    if(isActive) {
      className.push(styles.active);
    }
    return className.join(' ');
  }
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
          <NavLink to='/products' className={({isActive}) => activeClassName(styles.navLink, isActive)}>
            产品
          </NavLink>
          <NavLink to='/profile' className={({isActive}) => activeClassName(styles.navLink, isActive)}>
            我的
          </NavLink>
          <NavLink to='/about' className={({isActive}) => activeClassName(styles.navLink, isActive)}>
            关于
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
