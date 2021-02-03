import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <Link to="/">
            <img
                alt="Inverte logo with text"
                src="https://inverte.io/images/logo-text-dark.png"
                height={40}
            />
        </Link>
        <div>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
            </ul>
        </div>
    </nav>
)

export default NavBar;
