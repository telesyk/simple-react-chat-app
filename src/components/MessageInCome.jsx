/* eslint-disable react/prop-types */
import React from 'react';

function MessageInCome({ lastMessage, message }) {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image mr-auto ml-8"
        />
      ) : (
        <div className="message message-in-come">{message.text}</div>
      )}
    </div>
  );
}

export default MessageInCome;
