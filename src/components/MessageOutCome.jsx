/* eslint-disable react/prop-types */
import React from 'react';

function MessageOutCome({ message, isMyMessage }) {
  console.log('[message outCome]', message.sender.username);
  // console.log('[isMyMessage outCome]', isMyMessage);
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image ml-auto mr-8"
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
