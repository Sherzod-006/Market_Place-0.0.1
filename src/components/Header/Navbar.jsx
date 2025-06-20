import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faGlobe, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/public/—Pngtree—the lion of judah png_14642495.png" width={50} alt="Logo" />
            <h1><span>Lion's</span> Market</h1>
        </div>
        <ul>
            <li>
                <button>
                    <FontAwesomeIcon icon={faGlobe} /> <span>English</span> - <span>USD</span>
                </button>
            </li>
            <li>
                <button>
                Delivery to: <br />
                <span>USA</span>
                </button>
            </li>
            <li>
                <a href="#">
                <FontAwesomeIcon icon={faCartShopping} /> Cart
                </a>
            </li>
            <li>
                <a href="#">
                <FontAwesomeIcon icon={faUser} /> Sign In
                </a>
            </li>
            <li>
                <button>
                    Create Account
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
