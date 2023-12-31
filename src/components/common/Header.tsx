import React from "react";
import { Link } from "react-router-dom";
import briefcase from "src/assets/images/briefcase.svg";
import profile from "src/assets/images/user.svg";
import useRouter from "src/hooks/useRouter";
import "src/assets/css/header.css";

interface Props {}

const Header: React.FC<Props> = () => {
  const { pathname, navigate } = useRouter();

  const handleSignOut = () => {
    navigate("/sign-in");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" data-test-id="header-logo" className="header__logo">
          Travel App
        </Link>
        {pathname !== "/sign-up" && pathname !== "/sign-in" && (
          <nav data-test-id="header-nav" className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <Link
                  to="/bookings"
                  className="nav-header__inner"
                  data-test-id="header-bookings-link"
                >
                  <span className="visually-hidden">Bookings</span>
                  <img src={briefcase} alt="icon" />
                </Link>
              </li>
              <li className="nav-header__item" title="Profile">
                <div
                  className="nav-header__inner profile-nav"
                  tabIndex={0}
                  data-test-id="header-profile-nav"
                >
                  <span className="visually-hidden">Profile</span>
                  <img src={profile} alt="profile icon" />
                  <ul
                    className="profile-nav__list"
                    data-test-id="header-profile-nav-list"
                  >
                    <li
                      className="profile-nav__item profile-nav__username"
                      data-test-id="header-profile-nav-username"
                    >
                      John Doe
                    </li>
                    <li className="profile-nav__item">
                      <Link
                        data-test-id="header-profile-nav-sign-out"
                        to="/sign-in"
                        className="profile-nav__sign-out button"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
