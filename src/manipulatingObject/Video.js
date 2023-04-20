import { useEffect, useState } from "react";
import { fakeFetch } from "./utils/fakeFetch";

export const Video = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async (url) => {
      try {
        setLoading(true);
        const res = await fakeFetch(url);
        setLoading(false);

        const {
          data: { videos }
        } = res;
        setData(videos);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch("https://example.com/api/videos");
  }, []);
  const labelHandler = (id) => {
    const label = prompt("add label");
    const newData = data.map((el) => (el.title === id ? { ...el, label } : el));
    setData(newData);
  };
  return (
    <>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          {data.map(({ title, thumbnail, views, likes, label }) => (
            <div
              key={title}
              style={{ display: "inline-block", margin: "12px" }}
            >
              <img src={thumbnail} alt={title} />
              <p>Views: {views}</p>
              <p>Likes: {likes}</p>
              {label && <p>Label: {label}</p>}
              <button onClick={() => labelHandler(title)}>{label?"Update label":"Add a label"}</button>
            </div>
          ))}
        </>
      )}
    </>
  );
};
