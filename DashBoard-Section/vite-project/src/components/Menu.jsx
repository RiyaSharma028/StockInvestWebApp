import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedmenu, setselectedmenu] = useState(0);
  const [isprofiledropdownopen, setisprofiledropdownopen] = useState(false);

  const hanldeselectmenu = (index) => {
    setselectedmenu(index);
  };

 const  handleProfileClick = () => {
    setisprofiledropdownopen(!isprofiledropdownopen);
  };

  const menuclass = "menu";
  const activemenuclass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => hanldeselectmenu(0)}
            >
              <p className={selectedmenu === 0 ? activemenuclass : menuclass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => hanldeselectmenu(1)}
            >
              <p className={selectedmenu === 1 ? activemenuclass : menuclass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => hanldeselectmenu(2)}
            >
              <p className={selectedmenu === 2 ? activemenuclass : menuclass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => hanldeselectmenu(3)}
            >
              <p className={selectedmenu === 3 ? activemenuclass : menuclass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => hanldeselectmenu(4)}
            >
              <p className={selectedmenu === 4 ? activemenuclass : menuclass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => hanldeselectmenu(5)}
            >
              <p className={selectedmenu === 5 ? activemenuclass : menuclass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
