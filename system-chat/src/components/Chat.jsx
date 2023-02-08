import React, { useContext } from "react";

import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <i className="material-symbols-outlined">photo_camera</i>
          <i className="material-symbols-outlined">person</i>
          <i className="material-symbols-outlined">more_horiz</i>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
