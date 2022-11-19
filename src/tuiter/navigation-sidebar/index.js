import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[1];

  return (
    <>
      <i className="bi bi-twitter fs-2 d-block m-2 text-primary"></i>
      <div className="list-group">
        <Link
          to="/"
          className={`list-group-item ${
            active === "home" || active === undefined || active === ""
              ? "active"
              : ""
          }`}
        >
          <i className="bi bi-house"></i> Home
        </Link>
        <Link
          to="/explore"
          className={`list-group-item ${active === "explore" ? "active" : ""}`}
        >
          <i className="bi bi-hash"></i> Explore
        </Link>
        <Link
          to="/notifications"
          className={`list-group-item ${
            active === "notifications" ? "active" : ""
          }`}
        >
          <i className="bi bi-bell"></i> Notifications
        </Link>
        <Link
          to="/messages"
          className={`list-group-item ${active === "messages" ? "active" : ""}`}
        >
          <i className="bi bi-envelope"></i> Messages
        </Link>
        <Link
          to="/bookmarks"
          className={`list-group-item ${
            active === "bookmarks" ? "active" : ""
          }`}
        >
          <i className="bi bi-bookmark"></i> Bookmarks
        </Link>
        <Link
          to="/lists"
          className={`list-group-item ${active === "lists" ? "active" : ""}`}
        >
          <i className="bi bi-list-ul"></i> Lists
        </Link>
        <Link
          to="/profile"
          className={`list-group-item ${active === "profile" ? "active" : ""}`}
        >
          <i className="bi bi-person"></i> Profile
        </Link>
        <Link
          to="/more"
          className={`list-group-item ${active === "more" ? "active" : ""}`}
        >
          <i className="bi bi-three-dots"></i> More
        </Link>
      </div>
    </>
  );
};
export default NavigationSidebar;
