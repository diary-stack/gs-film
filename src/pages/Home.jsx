import Movies from "../components/Movies";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <p>
            <Search />
          </p>
        </div>
        <div className="col-lg-9">
          <Movies />
        </div>
      </div>
    </div>
  );
};

export default Home;
