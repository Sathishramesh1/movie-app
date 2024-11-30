import { useContext, useState } from "react";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput.js";

function Navbar({ children }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleChage = () => {
    setShow(!show);
    console.log("clicked");
  };

  return (
    <nav>
      <div className="logo">IMDB.com</div>
      <ul className={show ? "showMenu" : ""}>
        <li>
          <SearchInput />
        </li>

        <li>
          <Link to="/">GetAll</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>

      <div className="amber" onClick={() => handleChage()}>
        <MenuIcon />
      </div>
    </nav>
  );
}
export default Navbar;
