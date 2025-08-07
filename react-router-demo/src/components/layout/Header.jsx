import { Link } from 'react-router'

function Header() {
  return (
    <header style={{ 
      padding: '1rem', 
      backgroundColor: '#f5f5f5', 
      borderBottom: '1px solid #ddd',
      marginBottom: '2rem'
    }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>
          首页
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>
          关于
        </Link>
      </nav>
    </header>
  )
}

export default Header
