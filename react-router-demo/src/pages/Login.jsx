import useLoginStore from '../stores/appStore.js'
import { useNavigate } from 'react-router'

function Login() {
  const { login, logout } = useLoginStore()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate('/profile');
    alert('登录成功')
  }
  const handleLogout = () => {
    logout()
    alert('退出成功')
  }
  return (
    <div>
      <h1>这里是登录页面</h1>
      <p>没有登录的用户会看到这个页面</p>
      <button onClick={handleLogin}>登录</button>
      <button onClick={handleLogout}>退出</button>
    </div>
  )
}

export default Login
