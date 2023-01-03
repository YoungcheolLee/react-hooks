import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h2>ReactHooks를 알아보자!</h2>
      <h3> 목록 </h3>
      1. <Link to={"/UseState"}> useState </Link>
    </div>
  );
};

export default Home;
