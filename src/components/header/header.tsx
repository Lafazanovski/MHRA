import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;

  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <header className={isScrolled ? "navbar scrolled" : "navbar"}>
        <nav ref={navRef}>
          <div className="navbarContainer wrapper">
            {/* 1 */}
            <div className="navbarLogo">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={50}
                  height={60}
                />
              </Link>
            </div>
            {/* 2 */}
            <div className="navigationBarLinks">
              <ul className="navigationUl">
                {/* 1st Dropdown */}
                <li className="dropdown">
                  <button onClick={() => toggleDropdown("informativni")}>
                    <Link
                      href="/"
                      className={`navigationLink ${isActive("/") ? "activeLink" : ""}`}
                    >
                      <span>Информативни содржини</span>
                    </Link>
                  </button>
                  {openDropdown === "informativni" && (
                    <ul className="dropdownMenu">
                      <li>
                        <Link href="/aboutUs">За нас</Link>
                      </li>
                      <li>
                        <Link href="/">Членство</Link>
                      </li>
                      <li>
                        <Link href="/">Коучинг</Link>
                      </li>
                      <li>
                        <Link href="/">Галерија</Link>
                      </li>
                      <li>
                        <Link href="/">Огласи</Link>
                      </li>
                      <li>
                        <Link href="/">Награди</Link>
                      </li>
                      <li>
                        <Link href="/">Вести</Link>
                      </li>
                      <li>
                        <Link href="/">Архива</Link>
                      </li>
                      <li>
                        <Link href="/">FAQ</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* 2nd Dropdown */}
                <li className="dropdown">
                  <button onClick={() => toggleDropdown("edukativni")}>
                    <Link
                      href="/aboutUs"
                      className={`navigationLink ${isActive("/aboutUs") ? "activeLink" : ""}`}
                    >
                      <span>Едукативни содржини</span>
                    </Link>
                  </button>
                  {openDropdown === "edukativni" && (
                    <ul className="dropdownMenu">
                      <li>
                        <Link href="/">Артикли</Link>
                      </li>
                      <li>
                        <Link href="/">Истражувања</Link>
                      </li>
                      <li>
                        <Link href="/">Интервјуа</Link>
                      </li>
                      <li>
                        <Link href="/">Тренинг</Link>
                      </li>
                      <li>
                        <Link href="/">Академија</Link>
                      </li>
                      <li>
                        <Link href="/">Проекти</Link>
                      </li>
                      <li>
                        <Link href="/">Експерти</Link>
                      </li>
                      <li>
                        <Link href="/">Трендови</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    href="/conferencePage"
                    className={`navigationLink ${isActive("/conferencePage") ? "activeLink" : ""}`}
                  >
                    <span>Годишна конференција</span>
                  </Link>
                </li>

                {/* 3rd Dropdown */}
                <li className="dropdown">
                  <button onClick={() => toggleDropdown("nastani")}>
                    <Link
                      href="/eventListing"
                      className={`navigationLink ${isActive("/eventListing") ? "activeLink" : ""}`}
                    >
                      <span>Настани</span>
                    </Link>
                  </button>
                  {openDropdown === "nastani" && (
                    <ul className="dropdownMenu dropdownMenuEvents">
                      <li>
                        <Link href="/eventListing#hr-kafe">HR Coffee</Link>
                      </li>
                      <li>
                        <Link href="/eventListing#hr-vikend">HR Weekend</Link>
                      </li>
                      <li>
                        <Link href="/eventListing#hr-vebinar">HR Webinar</Link>
                      </li>
                      <li>
                        <Link href="/eventListing#hr-konferencii">
                          HR Conferences
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className={`navigationLink ${isActive("/blogs") ? "activeLink" : ""}`}
                  >
                    <span>Блог</span>
                  </Link>
                </li>

                {/* 4th Dropdown */}
                <li className="dropdown">
                  <button onClick={() => toggleDropdown("search")}>
                    <Link href="/" className="navigationLink">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="searchIcon"
                      />
                    </Link>
                  </button>
                  {openDropdown === "search" && (
                    <ul className="dropdownMenu dropdownMenuSearch">
                      <li>
                        <input
                          type="text"
                          placeholder="Search..."
                          name="search"
                          id="search"
                        />
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            {/* 3 */}
            <div className="signUpDiv">
              {/* 5th Dropdown */}
              <div className="dropdown">
                <button
                  className="dropdownNotificationsButton"
                  onClick={() => toggleDropdown("notifications")}
                >
                  <FontAwesomeIcon
                    icon={faBell}
                    className="notificationsIcon"
                  />
                </button>
                {openDropdown === "notifications" && (
                  <ul className="dropdownMenu dropdownMenuNotifications">
                    <li>
                      <p>Notification 1</p>
                    </li>
                    <li>
                      <p>Notification 2</p>
                    </li>
                    <li>
                      <p>Notification 3</p>
                    </li>
                  </ul>
                )}
              </div>
              <div className="languageToggleButtonDiv">
                <button
                  className="languageToggleButton">
                МК/EN
                </button>
              </div>
              <div className="signUpButtonDiv">
                <Link href="/signUp">
                  <button className="primaryButton signUpButton">
                    Зачлени се
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
