import tuits from "../tuits/tuits.json";
import TuitItem from "../tuits/tuits-list/tuit-item";

const HomeComponent = () => {
  return (
    <>
      <div>{tuits.map((tuit) => TuitItem({ tuit }))}</div>
    </>
  );
};

export default HomeComponent;
