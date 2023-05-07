import axios from "axios";
import { useState } from "react";

const CreateTweet = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const[shouldRefresh,setShouldRefresh] = useState(false)
  const upload = async () => {
    try {
      await axios.post("https://react-workshop-todo.fly.dev/posts/", {
        // header: {
        //   apiKey: "645672147213f63d431befe5",
        // },
        // authorname: "arpan paudel",
        // avatar:
        //   "https://pbs.twimg.com/profile_images/1576577412355104769/xmcFs5iC_400x400.jpg",
        
          content: tweetContent,
        image: imageUrl,
      },
      {
        headers:{
            apiKey:"645672147213f63d431befe5"
        },
      });

      setTweetContent("");
      setImageUrl("");
      setShouldRefresh((v) => !v);
    } catch (e) {
      console.log(e);
      alert("error uploading tweet");
    }
  };
  const handleSubmit = () => {
    // console.log(tweetContent);
    upload();
  };
  return (
    <div>
      <textarea
        id="tweet"
        name="tweet"
        placeholder="Type your tweet here"
        required
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="enter image url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <button type="submit" onClick={handleSubmit}>
        Tweet
      </button>
    </div>
  );
};

export default CreateTweet;
