import './NavBar.css';

function NavBar() {
  return (
    <nav className="menu" aria-label="Header menu links">
      <a href="products.html" target="_self">T-SHIRTS</a>
      <a href="not_implemented.html" target="_self">CREATE FROM PICTURE</a>
      <a href="create-your-own/index.html" target="_self">CREATE YOUR OWN</a>
      <a href="not_implemented.html" target="_self">ABOUT US</a>
      <a href="not_implemented.html" target="_self">LOG IN</a>
    </nav>
  );
}

export { NavBar };