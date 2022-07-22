import { Link } from 'react-router-dom'

const Nav = () => {

  return(
    <nav className='navbar'>
      <h4>Shitshow</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to='/Parks'>Parks</Link>
      </div>
    </nav>
  )
}

export default Nav