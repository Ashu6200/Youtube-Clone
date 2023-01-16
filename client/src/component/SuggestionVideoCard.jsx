import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VideoLength from "../helper/VideoLength";

const SuggestionVideoCard = ({ video }) => {
  return (
    <Wrapper>
      <Link to={`/video/${video?.videoId}`} style={{ textDecoration: "none" }}>
        <ConatinerLeft>
          <img src={video?.thumbnails[0]?.url} alt={video?.title} />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </ConatinerLeft>
      </Link>
      <ConatinerRight>
        <span className="span-1">{video?.title}</span>
        <Link
            to={`/channel/${video?.author?.channelId}`}
          style={{ textDecoration: "none" }}
        >
          <span className="span-2">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="icons" />
            )}
          </span>
        </Link>
        <div className="moreinfo">
          <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
          <span className="view">.</span>
          <span className="date">{video?.publishedTimeText}</span>
        </div>
      </ConatinerRight>
    </Wrapper>
  );
};

export default SuggestionVideoCard;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`;
const ConatinerLeft = styled.div`
  overflow: hidden;
  position: relative;
  width: 8rem;
  /* width: 10rem; */
  height: 5rem;
  /* height: 6rem; */
  border-radius: 20px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const ConatinerRight = styled.div`
  display: flex;
  overflow: hidden;
  margin-left: 0.75rem;
  flex-direction: column;
  .span-1 {
    color: #ffffff;
    font-size: 0.75rem;
    line-height: 1rem;
    /* font-size: 0.875rem;
line-height: 1.25rem;  */
    font-weight: 700;
  }
  .span-2 {
    display: flex;
    margin-top: 0.5rem;
    color: #ffffff;
    font-weight: 600;
    align-items: center;
    /* color: 12px; */
    /* color: 10px; */
    font-size: 12px;
    .icons {
      margin-left: 0.25rem;
      color: white;
      font-size: 12px;
    }
  }
  .moreinfo {
    display: flex;
    overflow: hidden;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
    font-size: 12px;
    .view {
      display: flex;
      position: relative;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      font-weight: 700;
      line-height: 1;
      color: white;
      font-size: 24px;
      top: -10px;
    }
    .date {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
