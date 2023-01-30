import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const [currentPost, setCurrentPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let { postId } = useParams();

  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/api/v1/post/${postId}`).then((res) => {
        setCurrentPost(res.data);
        console.log(res.data);
        setIsLoading(false);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <div>
      <h1>Post # </h1>
      {isLoading ? (
        "LOADING"
      ) : (
        <div>
          <h1 className="text-4xl">{currentPost.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: currentPost.body }}></div>
        </div>
      )}
    </div>
  );
}
