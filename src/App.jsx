import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const chatConfig = {
  ID: 'f120dab3-e5d2-4003-8d2c-bca33906f9ad',
  userPass: '123qwe',
  userName: 'admin',
};

function App() {
  return (
    <div className="page">
      <ChatEngine
        height="100vh"
        projectID={chatConfig.ID}
        userName={chatConfig.userName}
        userSecret={chatConfig.userPass}
        renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
