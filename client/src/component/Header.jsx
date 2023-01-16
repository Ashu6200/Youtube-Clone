import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { Context } from "../context/AppContext";
import { CgClose } from "react-icons/cg";
import Loader from "../helper/Loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  return (
    <Wrapper>
      <div className="header-left">
        {loading && <Loader />}
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="header-logo">
          <img className="img-logo1" src={ytLogo} alt="Youtube" />
          <img className="img-logo2" src={ytLogoMobile} alt="Youtube" />
        </Link>
      </div>
      <div className="header-center">
        <div className="header-input-area ">
          <input
            type="text"
            className="header-input-area-fleid"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button
          className="header-button"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="seacrhicon" />
        </button>
      </div>
      <div className="header-right">
        <div className="header-right-icons ">
          <div className="header-right-icons-1">
            <RiVideoAddLine className="icons" />
          </div>
          <div
            className="header-right-icons-1"
            style={{ marginLeft: "0.5rem" }}
          >
            <FiBell className="icons" />
          </div>
        </div>
        <div className="header-avatar">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
            alt="Avatar"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  background-color: black;
  .header-left {
    display: flex;
    align-items: center;
    height: 1.25rem;
    .header-logo {
      display: flex;
      align-items: center;
      height: 1.25rem;
      .img-logo1 {
        height: 100%;
      }
      .img-logo2 {
        display: none;
        height: 100%;
      }
    }
  }
  .header-center {
    display: flex;
    justify-items: center;
    .header-input-area {
      display: flex;
      height: 2rem;
      border-top-left-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;
      border-width: 1px;
      border: #303030;
      .header-input-area-fleid {
        background-color: transparent;
        outline: none;
        color: white;
        padding-right: 1.25rem;
        /* padding-left: 1.25rem; */
        padding-left: 20px;
        width: 500px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }
    .header-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
      border-width: 0.2px;
      border-left-width: 0;
      width: 40px;
      border: #303030;
      .seacrhicon {
        color: black;
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
  }
  .header-right {
    display: flex;
    justify-items: center;
    align-items: center;
    .header-right-icons {
      display: flex;
      padding-left: 20px;
      .header-right-icons-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 9999px;
        :hover {
          background-color: #303030;
        }
        .icons {
          color: white;
          cursor: pointer;
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
      }
    }
    .header-avatar {
      display: flex;
      overflow: hidden;
      width: 2rem;
      height: 2rem;
      border-radius: 999px;
    }
  }

  @media screen and (min-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    .img-logo2 {
      display: hidden;
    }
    .header-center {
      .header-input-area {
        padding-left: 1.25rem;
        margin-left: 2.5rem;
        height: 2.5rem;
        .header-input-area-icon {
          .icon {
          }
        }
        .header-input-area-fleid {
          /* padding-left: 0; */
        }
      }
      .header-button {
        width: 60px;
        height: 2.5rem;
      }
    }
  }
`;
