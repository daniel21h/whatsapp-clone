import React, { useState, useEffect } from "react";
import "./styles.css";

export default function ChatListItem({ onClick, active, data }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    if (data.lastMessageDate > 0) {
      let d = new Date(data.lastMessageDate.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;

      setTime(`${hours}:${minutes}`);
    }
  }, [data.lastMessageDate]);

  return (
    <div className={`chatitem ${active ? "active" : ""}`} onClick={onClick}>
      <img
        className="chatitem-avatar"
        src="https://api.adorable.io/avatars/285/abott@adorable.png
        "
        alt="Avatar"
      />

      <section className="chatitem-lines">
        <div className="chatitem-line">
          <div className="chatitem-name">{data.title}</div>
          <div className="chatitem-date">{time}</div>
        </div>
        <div className="chatitem-line">
          <div className="chatitem-lastmessage">
            <p>{data.lastMessage}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
