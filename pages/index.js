import React, { useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Context } from "../context";
const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    if (username || secret) {
      axios
        .put(
          "https://api.chatengine.io/users/",
          { username, secret },
          { headers: { "Private-key": "ce451c06-2985-4436-bf59-c903a96a2c80" } }
        )
        .then((res) => {
          router.push("/chats");
          console.log(res);
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJs Chat</div>
          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="password"
              className="text-input"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default Auth;
