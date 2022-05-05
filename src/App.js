import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const projectID = '93448806-0b79-4664-9697-b9475e714b5e';

const App = () => {
    return (
        <ChatEngine
          height="100vh"
          projectID={projectID}
          userName="shihab@123"
          userSecret="shihab@123"
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
      );
    };
    
    // infinite scroll, logout, more customizations...
    
    export default App;
