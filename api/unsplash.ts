import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jDF2uNQ8znXC6Nwcjk5COqiVl9f2BFquezhY39EG9gg",
  },
});
