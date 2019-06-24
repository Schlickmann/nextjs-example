import React from "react";
import axios from "axios";

export default class extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="/post">Posts</a>
            </li>
            <li>
              <a href="/files">Files</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
