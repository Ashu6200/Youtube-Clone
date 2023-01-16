import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../helper/VideoLength";
import styled from "styled-components";

const VideoCard = ({ video }) => {
  return (
    <Wrapper>
      <Link to={`/video/${video?.videoId}`} style={{ textDecoration: "none" }}>
        <div className="video-thumbnail-area">
          <img src={video?.thumbnails[0]?.url} alt="VideoThumbnail" />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
      </Link>
      <div className="video-info-area">
        <div className="video-info-area-conatiner-1">
          <Link
            to={`/channel/${video?.author?.channelId}`}
            style={{ textDecoration: "none" }}
          >
            <div className="video-avatar-area">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="VideoThumbnail-avatar"
              />
            </div>
          </Link>
        </div>
        <div className="video-info-area-conatiner-2">
          <span className="title ">{video?.title}</span>
          <span className="title2">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="icons" />
            )}
          </span>
          <div className="moreinfo">
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span className="view">.</span>
            <span className="date">{video?.publishedTimeText}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default VideoCard;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  .video-thumbnail-area {
    overflow: hidden;
    position: relative;
    /* height: 12rem; */
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .video-info-area {
    display: flex;
    margin-top: 0.75rem;
    color: #ffffff;
    .video-info-area-conatiner-1 {
      display: flex;
      align-items: flex-start;
      .video-avatar-area {
        display: flex;
        overflow: hidden;
        border-radius: 9999px;
        height: 2.25rem;
        width: 2.25rem;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
    .video-info-area-conatiner-2 {
      display: flex;
      flex-direction: column;
      margin-left: 0.75rem;
      overflow: hidden;
      .title {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 700;
      }
      .title2 {
        display: flex;
        margin-top: 0.5rem;
        font-weight: 600;
        align-items: center;
        color: white;
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
    }
  }
  @media screen and (min-width: 768px) {
    .video-thumbnail-area {
      height: 10rem;
      border-radius: 0.75rem;
    }
  }
`;
