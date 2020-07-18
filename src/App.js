import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, InputLabel, Input, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(prompt("Please enter your name here!"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        )
      );
  }, []);

  const addMess = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Welcome {username} to Chat Room</h2>
      <form>
        <FormControl>
          <InputLabel>Text here</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <IconButton type="submit" onClick={addMess} color="primary">
          <SendIcon />
        </IconButton>
      </form>
      <FlipMove>
        {messages.map((message) => (
          <Message
            key={message.id}
            username={username}
            message={message.message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
