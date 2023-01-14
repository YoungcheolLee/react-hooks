import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h2>ReactHooks를 알아보자!</h2>
      <h3> 목록 </h3>
      <div>
        1. <Link to={"/UseState"}> useState </Link>
      </div>
      <div>
        2. <Link to={"/UseEffect"}> useEffect </Link>
      </div>
    </div>
  );
};

export default Home;
