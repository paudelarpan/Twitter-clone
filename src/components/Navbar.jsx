const Navbar = () =>{
    return(
<header>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item active"><a href="#">Home</a></li>
      <li class="nav-item"><a href="#">Notifications</a></li>
      <li class="nav-item"><a href="#">Messages</a></li>
      <li class="nav-item"><a href="#">Bookmarks</a></li>
      <li class="nav-item"><a href="#">Lists</a></li>
      <li class="nav-item"><a href="#">Profile</a></li>
      <li class="nav-item"><a href="#">More</a></li>
      <li class="nav-item search-box">
        <input type="text" placeholder="Search Twitter"/>
        <button><i class="fa fa-search"></i></button>
      </li>
    </ul>
  </nav>
</header>

    );
};

export default Navbar;