import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../helper/VideoLength";
import styled from "styled-components";

const SearchResultVideoCard = ({ video }) => {
  return (
    <Wrapper>
      <Link to={`/video/${video?.videoId}`} style={{ textDecoration: "none" }}>
        <ContainerLeft>
          <img src={video?.thumbnails[0]?.url} alt={video?.title} />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </ContainerLeft>
      </Link>
      <ContainerRight>
        <span className="video-title">{video?.title}</span>
        <span className="video-description ">{video?.descriptionSnippet}</span>
        <Inforatiom>
          <Link
            to={`/channel/${video?.author?.channelId}`}
            style={{ textDecoration: "none" }}
          >
            <div className="information-conatiner-1">
              <div className="img-area">
                <img
                  src={video?.author?.avatar[0]?.url}
                  alt={video?.author?.name}
                />
              </div>
            </div>
          </Link>
          <div className="information-conatiner-2">
            <span className="author-text ">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="icon" />
              )}
            </span>
            <div className="moreInfo">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="span-2">.</span>
              <span className="span-3">{video?.publishedTimeText}</span>
            </div>
          </div>
        </Inforatiom>
      </ContainerRight>
    </Wrapper>
  );
};

export default SearchResultVideoCard;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  border-radius: 0.75rem;
  text-decoration: none;
  @media (min-width: 768px) {
    padding: 1rem;
    margin-bottom: 0.75rem;
    flex-direction: row;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 20rem;
  background-color: rgb(30 41 59);
  height: 12rem;
  border-radius: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContainerRight = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 1rem;
  margin-left: 1rem;
  flex-direction: column;
  text-decoration: none;
  .video-title {
    color: #ffffff;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
  .video-description {
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 1.5rem;
    .video-title {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;
const Inforatiom = styled.div`
  align-items: center;
  text-decoration: none;
  .information-conatiner-1 {
    display: flex;
    margin-right: 0.75rem;
    align-items: flex-start;
    .img-area {
      display: flex;
      overflow: hidden;
      border-radius: 9999px;
      height: 2.25rem;
      width: 2.25rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .information-conatiner-2 {
    display: flex;
    flex-direction: column;
    .author-text {
      display: flex;
      margin-top: 0.5rem;
      color: #ffffff;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 600;
      align-items: center;
      .icon {
        margin-left: 0.25rem;
        color: #ffffff;
        font-size: 12px;
      }
    }
    .moreInfo {
      display: flex;
      overflow: hidden;
      color: #ffffff;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .span-2 {
        display: flex;
        position: relative;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        font-weight: 700;
        line-height: 1;
        font-size: 24px;
        top: -10px;
      }
      .span-3 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;
