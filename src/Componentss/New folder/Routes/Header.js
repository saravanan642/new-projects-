import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="border border-none flex gap-[30px]">
        < a href='/home' >Home</a>
        <Link to={"/about"} >about</Link>
        <a href="/" className=""onClick={ () =>  navigate ("/contac")}>Contact</a>
        
      </div>
    </div>
  )
}

export default Header
