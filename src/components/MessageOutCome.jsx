/* eslint-disable react/prop-types */
import React from 'react';

function MessageOutCome({ message }) {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image ml-auto mr-8"
      />
    );
  }
  return <div className="message message-out-come">{message.text}</div>;
}

export default MessageOutCome;
