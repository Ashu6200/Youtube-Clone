import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchDataFromApi } from "../context/Api";
import { Context } from "../context/AppContext";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };
  return (
    <Wrapper>
      <LeftNav />
      <div className="Search-video-container">
        <div className="Search-video-area">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item.video;
            return <SearchResultVideoCard key={video.videoId} video={video} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchResult;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100%-56px);
  .Search-video-container {
    flex-grow: 1;
    overflow-y: auto;
    background-color: #000000;
    height: 100%;
    /* width: calc(100%-240px); */
    width: 80%;
    .Search-video-area {
      display: grid;
      padding: 1.25rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
  }
`;
