import { Link } from 'react-router-dom'

const Nav = () => {

  return(
    <nav className='navbar'>
      <h4> 🤡 🤡 🤡 </h4>
      <div>
        <Link to="/">Home</Link>
        <Link to='/Parks'>Parks</Link>
        <Link to='/form'>Sign Up</Link>
      </div>
    </nav>
  )
}

export default Nav