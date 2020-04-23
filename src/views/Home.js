import React, { useState, useEffect } from "react";
import { getUsers } from "../services";

import { Counter } from "./../features/counter/Counter";

function Home() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => {
      setUsers(data.users);
    });
  }, []);

  return (
    <div className="Page">
      <div className="Wrapper">
        <Counter />

        <ul data-testid="users">
          {users.map((user) => (
            <li key={user.id} data-testid={`user-${user.id}`}>
              {user.name}
            </li>
          ))}
        </ul>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </div>
    </div>
  );
}

export default Home;
