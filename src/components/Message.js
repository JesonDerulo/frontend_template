import React from "react";

function Message({ error }) {
  return (
    <div>
      <p>{typeof error === "object" ? JSON.stringify(error) : error}</p>
    </div>
  );
}

export default Message;
