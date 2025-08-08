import styles from './profile.module.css'
import userData from '../data/user.json'

function ProfileInfo() {
  const userInfo = userData

  return (
    <div className={styles.profileInfo}>
      <h1 className={styles.pageTitle}>基本信息</h1>

      <div className={styles.infoCard}>
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>个人信息</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <label className={styles.infoLabel}>姓名：</label>
              <span className={styles.infoValue}>{userInfo.name}</span>
            </div>
            <div className={styles.infoItem}>
              <label className={styles.infoLabel}>邮箱：</label>
              <span className={styles.infoValue}>{userInfo.email}</span>
            </div>
            <div className={styles.infoItem}>
              <label className={styles.infoLabel}>手机：</label>
              <span className={styles.infoValue}>{userInfo.phone}</span>
            </div>
            <div className={styles.infoItem}>
              <label className={styles.infoLabel}>地址：</label>
              <span className={styles.infoValue}>{userInfo.address}</span>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>账户信息</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <label className={styles.infoLabel}>注册时间：</label>
              <span className={styles.infoValue}>{userInfo.joinDate}</span>
            </div>
            <div className={styles.infoItem}>
              <label className={styles.infoLabel}>最后登录：</label>
              <span className={styles.infoValue}>{userInfo.lastLogin}</span>
            </div>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.editButton}>编辑信息</button>
          <button className={styles.changePasswordButton}>修改密码</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
