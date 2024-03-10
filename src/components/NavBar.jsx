import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="nav">
        <Link to='/spaceships'>
            <div>SPACESHIPS</div>
        </Link>
        <Link to='/characters'>
            <div>CHARACTERS</div>
        </Link>
        <Link to='/'><div>STAR TREK</div></Link>
        <Link to='/episodes'>
            <div>EPISODES</div>
        </Link>
        <Link to='/animals'>
            <div>ANIMALS</div>
        </Link>
    </div>
  )
}

export default NavBar