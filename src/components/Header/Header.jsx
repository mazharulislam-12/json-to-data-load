import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>

        <nav>
            <span>My Website</span>
            <br />
            <NavLink to="/">Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to="/users">User</NavLink>
            <NavLink to='/todos'>Todos</NavLink>
            <NavLink to='/posts'>Post</NavLink>
            <NavLink to='/phots'>Phots</NavLink>
            <NavLink to='/comment'>Comment</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        
        </nav>

        </div>
    );
};

export default Header;