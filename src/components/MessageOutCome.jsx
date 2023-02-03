/* eslint-disable react/prop-types */
import React from 'react';

function MessageOutCome({ message, isMyMessage }) {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image ml-auto mr-2"
      />
    );
  }
  return (
    <div className={`message-row ${isMyMessage ? 'flex-row-reverse' : ''}`}>
      <div className="message message-out-come">{message.text}</div>
    </div>
  );
}

export default MessageOutCome;
