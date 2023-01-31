/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined } from '@ant-design/icons';

function MessageForm(props) {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleSubmit = event => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
      setValue('');
    }
  };

  const handleChange = event => {
    event.preventDefault();
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Type your message"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <button type="submit" className="message-send" onSubmit={handleSubmit}>
        <SendOutlined className="message-send-icon" />
      </button>
    </form>
  );
}

export default MessageForm;
