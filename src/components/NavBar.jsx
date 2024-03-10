import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="nav">
        <Link to='/spaceships/0'>
            <div>SPACESHIPS</div>
        </Link>
        <Link to='/characters/0'>
            <div>CHARACTERS</div>
        </Link>
        <Link to='/'><div>STAR TREK</div></Link>
        <Link to='/episodes/0'>
            <div>EPISODES</div>
        </Link>
        <Link to='/animals'>
            <div>ANIMALS</div>
        </Link>
    </div>
  )
}

export default NavBar