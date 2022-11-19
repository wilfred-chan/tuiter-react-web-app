import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <div className="border pb-3">
      <div className="row">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Link to="/">
            <i className="bi bi-arrow-left"></i>
          </Link>
        </div>
        <div className="col-10">
          <div className="fw-bold">{profile.name}</div>
          <div className="text-muted" style={{ font: "12px" }}>
            114,514 Tuits
          </div>
        </div>
      </div>
      <div className="position-relative pb-5">
        <img
          className="img-fluid"
          src={`/images/${profile.bannerPicture}`}
          alt="paris banner image"
        ></img>
        <img
          className="mx-3 border border-3 rounded-circle position-absolute bottom-0 start-0"
          width={100}
          src={`/images/avatar/${profile.profilePicture}`}
          alt="user avatar icon"
        ></img>
        <Link to="/edit-profile">
          <button
            type="button"
            className="btn rounded-pill btn-light mx-2 position-absolute bottom-0 end-0"
          >
            Edit Profile
          </button>
        </Link>
      </div>
      <div className="mx-2">
        <div className="fs-4 fw-bold">{profile.name}</div>
        <div className="text-muted">{profile.handle}</div>
        <div className="my-1">{profile.bio}</div>
        <div className="text-muted my-1">
          <span className="me-3">
            <i className="bi bi-geo-alt me-1"></i>
            {profile.location}
          </span>
          <span className="me-3">
            <i className="bi bi-balloon me-1"></i>Born {profile.dateOfBirth}
          </span>
          <span className="me-3">
            <i className="bi bi-calendar3 me-1"></i>Joined {profile.dateJoined}
          </span>
        </div>
        <div className="my-1">
          <span className="fw-bold me-1">{profile.followingCount}</span>
          <span className="text-muted me-3">Following</span>
          <span className="fw-bold me-1">{profile.followersCount}</span>
          <span className="text-muted">Followers</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
