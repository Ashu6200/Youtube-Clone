import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../context/AppContext";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);
  return (
    <Wrapper>
      <LeftNav />
      <div className="feed-video-container">
        <div className="feed-video-area">
          {!loading &&
            searchResults.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Feed;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100%-56px);
  .feed-video-container {
    flex-grow: 1;
    overflow-y: auto;
    background-color: #000000;
    height: 100%;
    width: 80%;
    /* width: calc(100%-240px); */
    .feed-video-area {
      display: grid;
      padding: 1.25rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
  }
`;
