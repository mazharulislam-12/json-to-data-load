import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>

        <nav>
            <span>My Website</span>
            <br />
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/users">User</Link>
            <Link to='/posts'>Post</Link>
            <Link to='/comment'>Comment</Link>
            <Link to='contact'>Contact</Link>
        
        </nav>

        </div>
    );
};

export default Header;