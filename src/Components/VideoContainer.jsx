import React, { useEffect, useState } from "react";
import { YouTubeVideoApi } from "./Constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YouTubeVideoApi);
    const json = await data.json();
    // console.log(json.items)
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.map((item) => {
        return (
          <Link key={videos.id} to={"/watch?v=" + item.id}>
            <Videocard key={videos.id} {...item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
