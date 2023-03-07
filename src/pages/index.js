import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import logo from "../../logo.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import SocialIcons from './SocialIcons';


export default function Home() {
        const [activeNavItem, setActiveNavItem] = useState(null);

        const [selectedNavItem, setSelectedNavItem] = useState(null);

        const handleNavItemSelect = (eventKey) => {
          setSelectedNavItem(eventKey);
        };
      
        const handleNavItemClick = (index) => {
          setActiveNavItem(index);
        }
      
    
    function handleClick(event) {
        // prevent the default link behavior
        event.preventDefault();
      
        // remove the active class from all nav-links
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
          link.classList.remove("active");
        });
      
        // add the active class to the clicked nav-link
        event.target.classList.add("active");
      }
      
  return (

    <div className='container-fluid'>
<div class="contact-info">
  <div class="info">
    
    <p className='email_Top'> example@example.com</p>
<p> | </p>
    <p className='phone_top'>  123-456-7890 966 +</p>
  </div>
</div>

        <div>
      <SocialIcons />
    </div>
        <div className="text-center col-md-12"  >
        <Image 
       src={logo}
       alt="Logo"
       width={230}
       height={230}
      />                
       </div>


<div className="container">
<Navbar bg="light" expand="lg" className="centered-navbar rtl my-navbar">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mx-auto ml-auto">

      <Nav.Item>
        <Nav.Link eventKey="home" onSelect={handleNavItemSelect}>
          الرئيسية
        </Nav.Link>
      </Nav.Item>
      <div className="vertical-divider"></div>

      <Nav.Item>
        <Nav.Link eventKey="about" onSelect={handleNavItemSelect}>
          عن بيلي
        </Nav.Link>
      </Nav.Item>
      <div className="vertical-divider"></div>

      <Nav.Item>
        <Nav.Link eventKey="factory" onSelect={handleNavItemSelect}>
          المصنع
        </Nav.Link>
      </Nav.Item>
      <div className="vertical-divider"></div>

      <Nav.Item>
        <Nav.Link eventKey="products" onSelect={handleNavItemSelect}>
          المنتجات
        </Nav.Link>
      </Nav.Item>
      <div className="vertical-divider"></div>

      <Nav.Item>
        <Nav.Link eventKey="contact" onSelect={handleNavItemSelect}>
          نسعد بتواصلك
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
  {selectedNavItem && (
    <div className="nav-highlight" style={{ left: selectedNavItem * 100 }}>
      <div className="nav-highlight-inner"></div>
    </div>
  )}
</Navbar>



{/* <nav className="navbar navbar-expand-lg navbar-light" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '100%' }}>
  <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler11"
    aria-controls="navbarToggler11" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse flex-row-reverse justify-content-center" id="navbarToggler11">
    <ul className="navbar-nav mx-auto" >
      <li className="nav-item">
      <a className="nav-link" href="#" >الرئيسية</a>

      </li>
      <li className={`nav-item ${activeNavItem === 0 ? 'active' : ''}`}>
            <a className="nav-link" href="#" onClick={() => handleNavItemClick(0)}>الرئيسية</a>
          </li>
      <li className="nav-item">
        <a className="nav-link" href="#">المصنع</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">المنتجات</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">نسعد بتواصلك</a>
      </li>
    </ul>
  </div>
</nav> */}

</div>


</div>


  )

}
