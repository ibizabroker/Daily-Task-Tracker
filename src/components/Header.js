import Button from "./Button"
import { useLocation } from 'react-router-dom'

function Header({ onAdd, showAdd }) {
    const location = useLocation()

    return (
        <header className = 'header'>
           <h1>Daily Task Tracker</h1>
           {location.pathname === '/' && (<Button 
                color = {showAdd ? 'Red' : 'Yellowgreen'} 
                text = {showAdd ? 'Close' : 'Add'} 
                onClick = {onAdd}
           />)}
        </header>
    )
}

export default Header

