import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import styles from './profile.module.css'
import userData from '../data/user.json'

function Profile() {
  const location = useLocation()
  const [userInfo] = useState(userData)

  // 获取所有分类
  const navItems = [
    { path: '/profile', label: '基本信息', icon: '👤' },
    { path: '/profile/purchased', label: '购买记录', icon: '📦' },
    { path: '/profile/liked', label: '我的收藏', icon: '❤️' }
  ]

  return (
    <div className={styles.profileContainer}>
      <div className={styles.sidebar}>
        <div className={styles.userCard}>
          <img src={userInfo.avatar} alt="头像" className={styles.avatar} />
          <h2 className={styles.userName}>{userInfo.name}</h2>
          <p className={styles.userEmail}>{userInfo.email}</p>
          <div className={styles.userStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{userInfo.totalOrders}</span>
              <span className={styles.statLabel}>订单</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{userInfo.totalLikes}</span>
              <span className={styles.statLabel}>收藏</span>
            </div>
          </div>
        </div>

        <nav className={styles.navigation}>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navItem} ${
                location.pathname === item.path ? styles.navItemActive : ''
              }`}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.content}>
        {/* <Outlet /> */}
      </div>
    </div>
  )
}

export default Profile
