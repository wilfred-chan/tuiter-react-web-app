import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
    <div class="input-group flex-nowrap">
    <i
        class="fas fa-search input-group-text p-3"
        id="addon-wrapping"
    ></i>
    <input
        type="text"
        class="form-control rounded-pill px-5"
        placeholder="Search Tuiter"
        aria-label="Search"
        aria-describedby="addon-wrapping"
    />
    <button class="btn">
        <i class="fas fa-cog fa-2x text-primary"></i>
    </button>
    </div>
    <ul class="nav nav-tabs my-3" id="tabs">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
        For you
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">News</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
    </li>
    <li class="nav-item d-none d-md-inline">
        <a class="nav-link" href="#">Entertainment</a>
    </li>
    </ul>
    <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
    >
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="../../images/post/spacex.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-block fs-1 fw-bold text-start">
            SpaceX's Starship
        </div>
        </div>
    </div>
    </div>
    <div class="container">
        ${PostSummaryList()}
    </div>
  `;
};

export default ExploreComponent;
