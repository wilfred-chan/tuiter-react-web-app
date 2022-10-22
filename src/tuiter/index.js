import { Link } from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";

function Tuiter() {
  return (
    <div>
      <Nav />
      <NavigationSidebar active="home" />
      <WhoToFollowListItem
        who={{
          userName: "NASA",
          handle: "NASA",
          avatarIcon: "nasa.jpg",
        }}
      />
      <WhoToFollowListItem
        who={{
          userName: "Tesla",
          handle: "tesla",
          avatarIcon: "tesla.png",
        }}
      />
      <WhoToFollowListItem
        who={{
          userName: "Relativity Space",
          handle: "relativity_space",
          avatarIcon: "relativity_space.jpg",
        }}
      />

      <h1>Tuiter</h1>
    </div>
  );
}
export default Tuiter;
