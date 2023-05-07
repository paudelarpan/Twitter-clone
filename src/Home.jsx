import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import "./CreateTweet.css";
import Tweet from "./components/Tweet";
// import Navbar from "./components/Navbar";
import CreateTweet from "./components/CreateTweet";

// const names=[
//   {name:"haha",username:"huhuh"} ,
//   {name:"arpan",username:"arpan91"},
//   {name:"pawan",username:"pawan69"}
// ]

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get(
      "https://react-workshop-todo.fly.dev/posts/all?limit=20",
      {
        headers: {
          apiKey: "645672147213f63d431befe5",
        },
      }
    );
    console.log(posts.data);
    setTweets(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);

  return (
    <>
      {/* <Navbar />  */}
      <CreateTweet setShouldRefresh={setShouldRefresh} />
      {tweets.map((tweet) => {
        return (
          <Tweet
          name={tweet.user.fullname}
          username={tweet.user.name}
            key={tweet._id}
            id={tweet._id}
            avatar={
              `https://avatars.githubusercontent.com/u/${tweet.user.githubId}`
            }
            body={tweet.image}
            caption={tweet.content}
          />
        );
      })}

      {/* {names.map((person) => {
      return <Tweet name={person.name} username={person.username} body={"https://plus.unsplash.com/premium_photo-1680632914285-0bc6110e475c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} key={person} />
    }
    )} */}
      {/* <Tweet name="arpan" username="arpan91" body="https://plus.unsplash.com/premium_photo-1680632914285-0bc6110e475c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
      <Tweet name="pawan" username="pawan90" body= "https://images.unsplash.com/photo-1682655013153-0acc3cdb7140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
      <Tweet name="bishnu" username="bishnu77"/>
      <Tweet name="suraj" username="suraj88"/> */}
    </>
  );
};

export default Home;
