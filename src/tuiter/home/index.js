import tuits from "../tuits/tuits.json";
import TuitItem from "../tuits/tuits-list/tuit-item";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <>
      <h4>Home</h4>
      <WhatsHappening />
      <div>{tuits.map((tuit) => TuitItem({ tuit }))}</div>
    </>
  );
};

export default HomeComponent;
