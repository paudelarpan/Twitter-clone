import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Tweet from "./components/Tweet";
import axios from "axios";

const SingleTweet = () => {
  const [tweet, setTweet] = useState(null);
  const { id } = useParams();
  const fetchTweet = async () => {
    const resp = await axios.get(
      `https://react-workshop-todo.fly.dev/posts/${id}`,
      {
        headers: {
          apiKey: "645672147213f63d431befe5",
        },
      }
    );
    console.log(resp.data);
    setTweet(resp.data.post);
  };
  useEffect(() => {
    fetchTweet();
  }, []);
  return (
    <>
      {tweet ? (
        <Tweet
        caption={tweet?.content}
          name={tweet?.user.fullname}
          username={tweet?.user.name}
          
          body={tweet.image}
          id={tweet?._id}
          avatar={
            `https://avatars.githubusercontent.com/u/${tweet?.user?.githubId}`
          }
          key={tweet._id}
        />
      ) : null}
      
    </>
  );
};

export default SingleTweet;
