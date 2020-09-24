import React, { useState, useEffect } from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./styles.css";
import api from "../../services/api";

export default function NewChat({ chatlist, user, show, setShow }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        let results = await api.getContactList(user.id);

        setList(results);
      }
    };

    getList();
  }, [user]);

  const handleClose = () => {
    setShow(false);
  };

  const addNewChat = async (userplus) => {
    await api.addNewChat(user, userplus);

    handleClose();
  };

  return (
    <div className="newchat" style={{ left: show ? 0 : -415 }}>
      <div className="newchat-header">
        <div className="newchat-backbutton" onClick={handleClose}>
          <ArrowBackIcon style={{ color: "#ffffff" }} />
        </div>
        <div className="newchat-headtitle">Nova conversa</div>
      </div>

      <div className="newchat-list">
        {list.map((item, key) => (
          <div
            className="newchat-item"
            key={key}
            onClick={() => addNewChat(item)}
          >
            <img
              src={item.avatar}
              alt={item.name + "Avatar"}
              className="newchat-itemavatar"
            />
            <div className="newchat-itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
