import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faGlobe, faCartShopping, faUser, faBars} from '@fortawesome/free-solid-svg-icons'

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('bg-gray-700!');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-gray-700!');
      navbar.classList.add('bg-transparent');
    }
  });

const Navbar = () => {
  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 text-white!">
        <div className="flex items-center justify-between py-2 container">
            <a href="#" className="flex items-center font-bold text-3xl">
                <img src="/public/—Pngtree—the lion of judah png_14642495.png" width={55} alt="Logo" />
                <h1 className="text-[20px] md:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-yellow-500 to-blue-400">Lion's</span> Market</h1>
            </a>
            <ul className="flex items-center space-x-7 md:space-x-7 font-medium">
                <li className="">
                    <button className="hidden md:block hover:text-zinc-400 cursor-pointer">
                        <FontAwesomeIcon icon={faGlobe} /><span>English</span> <span>-</span> <span>USD</span>
                    </button>
                </li>
                <li>
                    <button className="hidden md:block hover:text-zinc-400 cursor-pointer">
                    Delivery to: <br />
                    <span>USA</span>
                    </button>
                </li>
                <li>
                    <a href="#" className="hover:text-zinc-400 cursor-pointer">
                    <FontAwesomeIcon icon={faCartShopping} /> <span className="hidden md:inline-block">Cart</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-zinc-400 cursor-pointer ">
                    <FontAwesomeIcon icon={faUser} /> <span className="hidden md:inline-block">Sing In</span>
                    </a>
                </li>
                <li>
                    <button className="hidden md:inline-block px-3 py-1 bg-zinc-500 rounded-2xl cursor-pointer hover:bg-zinc-600">
                        Create Account
                    </button>
                </li>
                <li>
                    <button className="md:hidden">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
