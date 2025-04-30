import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, onSnapshot } from './firebase';  // Import Firestore functions

// Main Chat Component
function App() {
  const [messages, setMessages] = useState([]);  // Store chat messages
  const [messageInput, setMessageInput] = useState('');  // Store the input message

  // Listen for changes in Firestore "messages" collection (Real-time updates)
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe();  // Cleanup function to unsubscribe from the listener
  }, []);

  // Function to send a message
  const sendMessage = async () => {
    if (messageInput.trim()) {
      try {
        // Add the new message to Firestore
        await addDoc(collection(db, 'messages'), {
          text: messageInput,
          timestamp: new Date(),
        });

        // Clear input field after sending the message
        setMessageInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="App">
      <h2>Chat Room</h2>
      
      <div className="messages">
        {/* Display all chat messages */}
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <div className="input-area">
        {/* Input field for new messages */}
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}  // Update input state
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>  {/* Button to send the message */}
      </div>
    </div>
  );
}

export default App;
