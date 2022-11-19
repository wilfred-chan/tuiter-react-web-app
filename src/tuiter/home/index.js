import TuitList from "../tuits/tuits-list/tuit-list";
import WhatsHappening from "./whats-happening";
import { useSelector } from "react-redux";

const HomeComponent = () => {
  const tuits = useSelector((state) => state.tuits);
  return (
    <>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitList />
    </>
  );
};

export default HomeComponent;
