import "./Youtobe.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const Youtobe = () => {
  const [Videos, setVideos] = useState([]);
  const [Query, setQuery] = useState("");

  useEffect(() => {}, []);

  const handleSearch = async () => {
    const res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyDzevIJqObzhMhZAS2d6IdNxiqNyrjELxg",
        q: Query,
      },
    });
    const data = [];
    if (res && res.data && res.data.items) {
      const raw = res.data.items;
      raw.forEach((item) => {
        let object = {};
        object.id = item.id.videoId;
        object.title = item.snippet.title;
        object.publishTime = item.snippet.publishTime;
        object.channel = item.snippet.channelTitle;
        object.description = item.snippet.description;
        data.push(object);
      });
    }

    setVideos(data);
  };

  return (
    <div className="Youtobe_comtainer">
      <div className="Youtobe_header">
        <h1>Youtobe</h1>
      </div>
      <div className="Youtobe_content">
        <div className="search">
          <input
            placeholder="Tìm kiếm"
            value={Query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="video">
          {Videos &&
            Videos.length > 0 &&
            Videos.map((item) => {
              return (
                <div className="video-item">
                  <div className="video-img">
                    <iframe
                      width="930"
                      height="523"
                      src={`https://www.youtube.com/embed/${item.id}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-content">
                    <div className="video-title">{item.title}</div>
                    <div className="video-description">
                      <p className="text-gray">
                        Ngày đăng : {item.publishTime}
                      </p>
                      <p className="text-gray chanel">
                        Chanel : {item.channel}
                      </p>
                      <div className="description">{item.description}</div>
                      <button className="status">Mới</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Youtobe;
