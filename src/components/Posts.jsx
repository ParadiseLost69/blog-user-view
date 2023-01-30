import React, { useEffect, useState } from "react";

import getPosts from "../utils/getPosts";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [allPosts, setAllPosts] = useState({});

  useEffect(() => {
    try {
      getPosts(setAllPosts, setIsLoading);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <>
      <div>
        <h1 className="text-4xl">Posts</h1>
      </div>
      <div>
        <div className="mx-auto">
          {isLoading ? (
            <div> Loading </div>
          ) : (
            allPosts.map((post) => {
              return (
                <div key={post._id}>
                  <h1>{post.title}</h1>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
