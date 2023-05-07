import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Tweet = ({ name, username,body,avatar,caption,id }) => {
  return (
    <div className="tweet">
      <img
        src={avatar}
        alt="Profile Picture"
        height={50}
        width={50}
      />
      <div className="tweet-content">
        <Header name={name} username={username} />
        <TweetBody body={body} caption={caption} id={id}/>
        <Footer />
      </div>
    </div>
  );
};

export default Tweet;