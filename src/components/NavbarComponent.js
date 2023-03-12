import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

export default function NavbarComponent() {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemSelect = (eventKey) => {
    // setSelectedNavItem(eventKey);
    // setActiveNavItem(eventKey);
  };

  const handleNavItemClick = (index) => {
    // setActiveNavItem(index);
  };

  function handleClick(event) {
    // prevent the default link behavior
    // event.preventDefault();
    // remove the active class from all nav-links
    // const navLinks = document.querySelectorAll(".nav-link");
    // navLinks.forEach((link) => {
    //   link.classList.remove("active");
    // });
    // add the active class to the clicked nav-link
    // event.target.classList.add("active");
  }
  return (
    <div>
      <Navbar bg="light" expand="lg" className="centered-navbar rtl my-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ml-auto">
            <Nav.Item>
              <Link
                href="/"
                style={{ textDecoration: "none" }}
                eventKey="home"
                onSelect={handleNavItemSelect}
                onClick={() => handleNavItemClick(0)}
                className={`Link ${activeNavItem === 0 ? "active" : ""}`}
              >
                الرئيسية
              </Link>
            </Nav.Item>
            <div className="vertical-divider"></div>

            <Nav.Item>
              <Link
                href="/about"
                style={{ textDecoration: "none" }}
                eventKey="about"
                onSelect={handleNavItemSelect}
                onClick={() => handleNavItemClick(1)}
                className={`Link ${activeNavItem === 1 ? "active" : ""}`}
              >
                عن بيلي{" "}
              </Link>
            </Nav.Item>
            <div className="vertical-divider"></div>

            <Nav.Item>
              <Link
                href="/factory"
                style={{ textDecoration: "none" }}
                eventKey="factory"
                onSelect={handleNavItemSelect}
                onClick={() => handleNavItemClick(2)}
                className={`Link ${activeNavItem === 2 ? "active" : ""}`}
              >
                المصنع
              </Link>
            </Nav.Item>
            <div className="vertical-divider"></div>

            <Nav.Item>
              <Link
                href="/products"
                style={{ textDecoration: "none" }}
                eventKey="products"
                onSelect={handleNavItemSelect}
                onClick={() => handleNavItemClick(3)}
                className={`Link ${activeNavItem === 3 ? "active" : ""}`}
              >
                المنتجات
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        {selectedNavItem && (
          <div
            className="nav-highlight"
            style={{ left: selectedNavItem * 100 }}
          >
            <div className="nav-highlight-inner"></div>
          </div>
        )}
      </Navbar>
    </div>
  );
}
