import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [titles, setTitles] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value.trim();

    if (value) {
      axios
        .get(`http://192.168.221.145:9000/api/movies/search/${value}`)
        .then((res) => {
          setTitles(res.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setTitles([]);
    }
  };
  return (
    <div className="pt-4">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="search"
          className="form-control"
          placeholder="search movies"
          onChange={handleChange}
        />
      </form>
      <ul className="res">
        {titles.map((value) => {
          return (
            <li key={value.movie_id}>
              <Link to={`/detail/${value.slugg}`} className="search-res">
                <i class="fas fa-arrow-left"></i>
                {value.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
