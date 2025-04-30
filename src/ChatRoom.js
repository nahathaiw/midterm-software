// import React, { useState, useEffect } from 'react';
// import { db, collection, addDoc, onSnapshot } from './firebase';

// function ChatRoom() {
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState('');

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
//       setMessages(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }))
//       );
//     });
//     return () => unsubscribe();
//   }, []);

//   const sendMessage = async () => {
//     if (messageInput) {
//       await addDoc(collection(db, 'messages'), {
//         text: messageInput,
//         timestamp: new Date(),
//       });
//       setMessageInput('');
//     }
//   };

//   return (
//     <div className="chat-room">
//       <h2>Chat Room</h2>
//       <div className="messages">
//         {messages.map((message) => (
//           <div key={message.id} className="message">
//             <p>{message.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="input-area">
//         <input
//           type="text"
//           value={messageInput}
//           onChange={(e) => setMessageInput(e.target.value)}
//           placeholder="Type a message"
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default ChatRoom;
