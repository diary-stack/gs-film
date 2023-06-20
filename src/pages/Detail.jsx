import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NotFound from "./NotFound";

const Detail = () => {
  const params = useParams();

  const [content, setContent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://192.168.221.145:9000/api/movies/${params.slugg} `)
      .then((response) => {
        const { movie } = response.data;
        setContent(
          <div className="row">
            <div className="col-lg-4">
              <img
                src={`http://192.168.221.145:9000${movie.image}`}
                className="img-fluid"
                alt={movie.title}
              />
            </div>
            <div className="col-lg-8">
              <h3>{movie.title}</h3>
              <p>{movie.content}</p>
            </div>
          </div>
        );
      })
      .catch((error) => {
        setContent(<NotFound />);
      });
  }, [params.slugg]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Link to={"/"} className="btn btn-secondary mb-2">
            {" "}
            Go Home
          </Link>
          {content === null ? <h4>Loading...</h4> : content}
        </div>
      </div>
    </div>
  );
};

export default Detail;
