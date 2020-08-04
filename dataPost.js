import React from "react";
class PostData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postId: null };
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "React POST Request test by Zainab Azzam",
      }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  }
  render() {
    const { postId } = this.state;
    return (
      <div>
        <h3> fetch data with react</h3>
        <div>post id : {postId}</div>
      </div>
    );
  }
}

export default PostData;
