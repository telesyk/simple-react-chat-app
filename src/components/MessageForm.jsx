/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

function MessageForm(props) {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleSubmit = event => {
    console.log('[event submit]', event);
    event.preventDefault();

    const text = value.trim();
    console.log('[text]', text);

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
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
}

export default MessageForm;
