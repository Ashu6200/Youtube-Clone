import React, { useContext, useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchDataFromApi } from "../context/Api";
import { Context } from "../context/AppContext";
import ChannelVideoCard from "./ChannelVideoCard";
import LeftNav from "./LeftNav";

const Channel = () => {
  const [channel, setChannel] = useState();
  const [channelVideo, setChannelVideo] = useState();
  const { setLoading } = useContext(Context);
  const { id } = useParams();

  const fetchChannelDetails = () => {
    setLoading(true);
    fetchDataFromApi(`channel/details/?id=${id}`).then((res) => {
      setChannel(res);
      setLoading(false);
    });
  };
  const fetchChannelVideo = () => {
    setLoading(true);
    fetchDataFromApi(`channel/video/?id=${id}`).then((res) => {
      setChannelVideo(res);
      setLoading(false);
    });
  };
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchChannelDetails();
    fetchChannelVideo();
  }, [id]);

  return (
    <Wrapper>
      <LeftNav />
      <div className="channel-conatiner">
        <div className="channel-area">
          <div className="channel-details">
            <div className="channel-banner">
              <img src={channel?.banner?.desktop[0]?.url} alt="Banner" />
            </div>
            <div className="channel-info">
              <div className="channel-info-1">
                <div className="avatar-area">
                  <img src={channel?.avatar[0]?.url} alt="Avatar" />
                </div>
              </div>
              <div className="channel-info-2">
                <div className="info-1">
                  <span className="text-span">
                    {channel?.title}
                    {channel?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="icons" />
                    )}
                  </span>
                </div>
                <div className="info-2">{channel?.stats?.subscribersText}</div>
              </div>
            </div>
          </div>
          <div className="channel-videos">
            <h1 style={{ color: "white" }}>Channel Videos</h1>
            <hr style={{ border: "2px solid white" }} />
            {channelVideo?.contents?.map((item, index) => {
              return <ChannelVideoCard key={index} video={item} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Channel;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100%-56px);
  .channel-conatiner {
    flex-grow: 1;
    overflow-y: auto;
    background-color: #000000;
    height: 100%;
    width: 80%;
    .channel-area {
      display: flex;
      flex-direction: column;
      padding: 1.25rem;
      gap: 1rem;
      .channel-details {
        display: flex;
        flex-direction: column;
        .channel-banner {
          display: flex;
          width: 100%;
          height: 200px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .channel-info {
          padding-top: 20px;
          padding-left: 40px;
          display: flex;
          align-items: center;
          .channel-info-1 {
            display: flex;
            align-items: flex-start;
            .avatar-area {
              display: flex;
              overflow: hidden;
              width: 4.5rem;
              height: 4.5rem;
              border-radius: 9999px;
              img {
                height: 100%;
                width: 100%;
                object-fit: cover;
              }
            }
          }
          .channel-info-2 {
            display: flex;
            margin-left: 0.75rem;
            flex-direction: column;
            padding-left: 15px;
            .info-1 {
              display: flex;
              color: #ffffff;
              font-weight: 600;
              align-items: center;
              font-size: 1rem;
              line-height: 1.5rem;
              .text-span {
                font-size: 20px;
                .icons {
                  margin-left: 0.25rem;
                  color: #ffffff;
                  font-size: 12px;
                }
              }
            }
            .info-2 {
              color: #ffffff;
              font-size: 0.875rem;
              line-height: 1.25rem;
            }
          }
        }
      }
      .channel-videos {
        padding-left: 40px;
      }
    }
  }
`;
