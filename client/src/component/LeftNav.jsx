import React, { useContext } from "react";
import { categories } from "../utils/constant";
import LeftNavMenuItem from "./LeftNavMenuItem";
import styled from "styled-components";
import { Context } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory } =
    useContext(Context);
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <div className="sidebar">
          {categories.map((item) => {
            return (
              <React.Fragment key={item.name}>
                <LeftNavMenuItem
                  text={item.type === "home" ? "Home" : item.name}
                  icon={item.icon}
                  action={() => {
                    clickHandler(item.name, item.type);
                    navigate("/");
                  }}
                  className={`${
                    selectedCategory === item.name ? "white" : ""
                  }`}
                  className1={`${
                    selectedCategory === item.name ? "black" : ""
                  }`}
                />
                {item.divider && <hr className="divider" />}
              </React.Fragment>
            );
          })}
          <hr className="divider" />
          <div className="Details">Hey! Ashutosh </div>
        </div>
      </Wrapper>
    </>
  );
};

export default LeftNav;
const Wrapper = styled.div`
  overflow-y: auto;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #000000;
  z-index: 10;
  /* transform: translateX(0); */
  .sidebar {
    display: flex;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    flex-direction: column;
    .divider {
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      border: white;
    }
    .Details {
      color: white;
      font-size: 12px;
    }
  }
`;
