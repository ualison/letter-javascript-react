import React, { useState, useEffect } from "react";
import { ListUsers } from "./components/ListUsers";
import { Header } from "./components/Header";
import { Get } from "./services/api";
import { JoinedArray } from "./utils/Util";
import "./App.css";

function App() {
  
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    Get("https://jsonplaceholder.typicode.com/users").then(
      (users) => {
        setUsers(users);
      }
    );

    Get("https://jsonplaceholder.typicode.com/posts").then(
      (posts) => {
        setPosts(posts);
      }
    );
  }, []);

  
  return (
    <div>
      <Header />
      {Array.isArray(users) &&
      users !== [] &&
      Array.isArray(posts) &&
      posts !== [] ? (
        <ListUsers data={JoinedArray(users, posts)} />
      ) : (
        <div className="error">"Unexpected error! See your Browser console for more detals"</div>
      )}
      ;
    </div>
  );
}

export default App;
