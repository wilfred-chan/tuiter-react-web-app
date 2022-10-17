const NavigationSidebar = (active) => {
  return `
    <ul class="nav flex-column nav-pills">
            <li class="nav-item border">
              <a
                class="nav-link disabled text-body"
                aria-current="page"
                href="#"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item border">
              <a class="nav-link ${
                active === "home" ? "active" : ""
              }" href="../HomeScreen/index.html">
                <i class="fas fa-home"></i>
                <span class="d-none d-xl-inline">Home</span>
              </a>
            </li>
            <li class="nav-item border">
              <a class="nav-link ${
                active === "explore" ? "active" : ""
              }" aria-current="page" href="../ExploreScreen/index.html">
                <i class="fas fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
              </a>
            </li>
            <li class="nav-item border">
              <a class="nav-link" href="#">
                <i class="fas fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
              </a>
            </li>
            <li class="nav-item border">
              <a class="nav-link" href="#">
                <i class="fas fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
              </a>
            </li>
            <li class="nav-item border">
              <a class="nav-link" href="#">
                <i class="fas fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
              </a>
            </li>
            <li class="nav-item border">
              <a class="nav-link" href="#">
                <i class="fas fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
              </a>
            </li>
            <li class="nav-item border">
              <a class="nav-link" href="#">
                <i class="fas fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
              </a>
            </li>
            <li class="nav-item border">
              <a class="nav-link" href="#">
                <i class="fas fa-ellipsis-h"></i>
                <span class="d-none d-xl-inline">More</span>
              </a>
            </li>
          </ul>
    <div class="d-grid mt-2">
    <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
    </div>
    `;
};

export default NavigationSidebar;
