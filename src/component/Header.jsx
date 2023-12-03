import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Header = () => {
  const location = useLocation();
  const [firstValue, setFirstValue] = useState("");
  const { sortList } = useContext(GlobalContext);
  const [locData, setLocData] = useState("");

  useEffect(() => {
    if (location.pathname.includes("watchlist")) {
      return setLocData("watchlist");
    } else if (location.pathname.includes("watched")) {
      return setLocData("watched");
    } else {
      setLocData("");
    }
  }, [location]);

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={"/watchlist"}> İzlenecekler</Link>
          </div>
          <ul className="nav-links">
            {locData && (
              <li>
                <label>IMDB puanına göre sırala..</label>
                <select
                  onChange={(e) => {
                    sortList(e.target.value, locData);
                    setFirstValue(e.target.value);
                  }}
                  name="sorting"
                  id="sorting"
                  value={firstValue}
                >
                  <option value="">Seçiniz..</option>
                  <option value="asc" placeholder="Artan">
                    Artan
                  </option>
                  <option value="desc" placeholder="Azalan">
                    Azalan
                  </option>
                </select>
              </li>
            )}
            <li>
              <Link to={"/watched"}> İzlenenler</Link>
            </li>
            <li>
              <Link to={"/add"} className="btn">
                <i className="fas fa-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
