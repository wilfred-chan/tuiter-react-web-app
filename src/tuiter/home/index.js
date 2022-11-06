import TuitItem from "../tuits/tuits-list/tuit-item";
import WhatsHappening from "./whats-happening";
import { useSelector } from "react-redux";

const HomeComponent = () => {
  const tuits = useSelector((state) => state.tuits);
  return (
    <>
      <h4>Home</h4>
      <WhatsHappening />
      <div>
        {tuits.map((tuit) => (
          <TuitItem tuit={tuit} key={tuit._id} />
        ))}
      </div>
    </>
  );
};

export default HomeComponent;
