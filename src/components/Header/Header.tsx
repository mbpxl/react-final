import classes from "./header.module.scss";
import logo from "../../assets/icons/logo.png";
import search from "../../assets/icons/search.svg";
import burger from "../../assets/icons/burger.svg";
import profile from "../../assets/icons/profile.svg";
import bin from "../../assets/icons/bin.svg";
import close from "../../assets/icons/close.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";

const Header = () => {
  const binItems = useSelector((state: RootState) => state.binList.bin);
  const binLength = binItems.length;


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={classes.header}>
      <div className={`${classes.header__container} ${classes._container}`}>
        <div className={classes.header__left}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>

          <NavLink to="/catalog">
            <img src={search} alt="search" />
          </NavLink>
        </div>
        <div className={classes.header__right}>
          <button onClick={toggleMenu}>
            <img src={burger} alt="burger" className={classes.header__burger} />
          </button>

          <NavLink to="/sign-up">
            <img src={profile} alt="profile" />
          </NavLink>

          <NavLink to="/bin" className={classes.header__right_bin}>
            <img src={bin} alt="bin" />
            <span className={classes.header__right_bin_count}>{binLength}</span>
          </NavLink>
        </div>

        <nav
          className={`${classes.header__nav} ${classes.nav} ${
            isMenuOpen ? classes.header__opened : ""
          }`}
        >
          <div className={classes.nav__wrap}>
            <div className={classes.nav__close}>
              <button
                onClick={toggleMenu}
                className={classes.nav__close_button}
              >
                <img src={close} alt="close" className={classes.nav__close} />
              </button>
            </div>

            <h3 className={classes.nav__title}>MENU</h3>
            <h4 className={classes.nav__heading}>MAN</h4>

            <ul className={classes.nav__list}>
              <li>Accessories</li>
              <li>Bags</li>
              <li>Denim</li>
              <li>T-Shirts</li>
            </ul>

            <h4 className={classes.nav__heading}>WOMAN</h4>

            <ul className={classes.nav__list}>
              <li>Accessories</li>
              <li>Jackets & Coats</li>
              <li>Polos</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
            </ul>

            <h4 className={classes.nav__heading}>KIDS</h4>

            <ul className={`${classes.nav__list} ${classes.nav__list_end}`}>
              <li>Accessories</li>
              <li>Jackets & Coats</li>
              <li>Polos</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
              <li>Bags</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
