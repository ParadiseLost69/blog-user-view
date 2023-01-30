import axios from "axios";

export default function getPosts(setFunction, setLoading) {
  axios.get("http://localhost:3000/api/v1/posts").then((response) => {
    setFunction(response.data.data);
    setLoading(false);
  });
}
