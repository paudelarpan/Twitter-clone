const TweetBody = ({body,caption, id}) => {
    return (
      <a href={`/tweet/${id}`} >
        <div>
        <p className="tweet-text">{caption}</p>
          <img
            className="tweet-image"
            src={body}            
            alt="Tweet Image" 
          />
          </div>
          </a>
    )
}
export default TweetBody;