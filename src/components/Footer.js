import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

function Footer() {
    const location = useLocation()

    return (
        <footer>
            { location.pathname === '/' && 
            <Link to = "/about" className = "link">ABOUT</Link> } 
            
        </footer>
    )
}

export default Footer
