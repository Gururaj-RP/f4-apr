import "./App.css";
//import Search from "./Searchbar";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    //fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`)
   // fetch(`https://picsum.photos/200?random=${id}`)
    //https://jsonplaceholder.typicode.com/posts`)
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, [page]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  var filterPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log("Filter", filterPosts);

  return (
    <div className="App">
      
      <div className="row">
        {filterPosts.map((post) => (
          <Post
            key={post.userid}
            id={post.id}
            number={post.id}
            title={post.title}
            body={post.body}
            
          />
        ))}
        
      </div>

      <button className="nextPage" onClick={() => setPage(page + 1)}>
        Load More Posts
      </button>
    </div>
  );
}

export default App;