/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

function MessageForm(props) {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleSubmit = event => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue('');
  };

  const handleChange = event => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  const handleUpload = event => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
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
      <label htmlFor="uploadButton">
        <span className="message-button">
          <PictureOutlined className="message-upload-icon" />
        </span>
        <input
          type="file"
          id="uploadButton"
          multiple={false}
          style={{ display: 'none' }}
          onChange={handleUpload}
        />
      </label>
      <button type="submit" className="message-button" onSubmit={handleSubmit}>
        <SendOutlined className="message-send-icon" />
      </button>
    </form>
  );
}

export default MessageForm;
