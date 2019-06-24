import React from "react";
import axios from "axios";

export default class extends React.Component {
  static async getInitialProps({ req, res }) {
    return { files: res.filesFound };
  }

  render() {
    return (
      <div style={{ background: "#bad80b" }}>
        Files inside of:{" "}
        <strong>
          {this.props.files.map(file => (
            <h3>{file}</h3>
          ))}
        </strong>
      </div>
    );
  }
}
