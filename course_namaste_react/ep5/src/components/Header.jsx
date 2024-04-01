const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// export -> so that other componnents can import this in their file
export default Header;
