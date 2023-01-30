import React, { useEffect, useState } from "react";
import { formatRelative } from "date-fns";
import { Link } from "react-router-dom";
import getPosts from "../utils/getPosts";
import Button from "./Button";

export default function Posts({ postsRef }) {
  //for fetching data states with loading
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
    <section id="all-posts" className="flex w-screen mt-6 flex-col space-y-4">
      <div>
        <h2 className="text-5xl" ref={postsRef}>
          Posts
        </h2>
      </div>
      <div>
        <div className="mx-auto flex flex-col space-y-4">
          {isLoading ? (
            <div> Loading </div>
          ) : (
            allPosts.map((post, index) => {
              let orientation =
                index % 2 !== 0 ? "md:place-self-end" : "md:place-self-start";
              return (
                <div
                  key={post._id}
                  className={`flex flex-col shadow-sm border border-w-2 border-black bg-yellow-100 ${orientation} p-3  md:w-2/3`}
                >
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {post.title}
                  </h3>
                  <div>
                    <p className="text-red-500">
                      Created:{" "}
                      {formatRelative(
                        Date.parse(post.created_at),
                        new Date().getDate(),
                        4
                      )}
                    </p>
                    <p className="text-red-500">
                      Updated:{" "}
                      {formatRelative(
                        Date.parse(post.edited_at),
                        new Date().getDate(),
                        4
                      )}
                    </p>
                  </div>
                  <Link to={`/post/${post._id}`}>
                    <Button>View Post</Button>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
