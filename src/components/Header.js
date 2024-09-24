import { Link, useNavigate } from "react-router-dom";
import { AiFillRedditSquare } from "react-icons/ai";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState("");
  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleQueryChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.length) return;

    navigate(`r/search?q=${query}`);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__nav-button" onClick={toggleSidebar}>
          {isOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
        </button>
        <Link to="/" className="header__nav-logo">
          <AiFillRedditSquare size={32} />
          <span className="header__nav-logo-text">smolReddit</span>
        </Link>
      </nav>
      <form className="header__search-form" onSubmit={handleSubmit}>
        <label className="header__search-label" htmlFor="search">
          <input
            className="header__search-input"
            type="search"
            name="search"
            id="search"
            placeholder="Search Reddit"
            autoComplete="off"
            value={query}
            onChange={handleQueryChange}
          />
        </label>
      </form>
      <Sidebar isOpen={isOpen} />
    </header>
  );
};

export default Header;
