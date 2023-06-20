import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.221.145:9000/api/movies")
      .then((respose) => {
        setData(respose.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="row">
      {data.length === 0 ? (
        <h4 className="text-center pt-5">No Data</h4>
      ) : (
        data.map((value) => {
          return (
            <div className="col-lg-4" key={value.slugg}>
              <Link className="movie-link" to={`/detail/${value.slugg}`}>
                <div
                  className="bg-img"
                  style={{
                    backgroundImage: `url(http://192.168.221.145:9000${value.image})`,
                  }}
                ></div>
                <h6>{value.title}</h6>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Movies;
