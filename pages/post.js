import React from "react";
import axios from "axios";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await axios.get("https://api.github.com/repos/zeit/next.js");
    return { stars: res.data.stargazers_count };
  }

  render() {
    const { stars } = this.props;

    return (
      <div>
        Next stars: <strong>{stars}</strong>
      </div>
    );
  }
}
