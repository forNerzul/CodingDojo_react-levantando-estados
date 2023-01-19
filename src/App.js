import "./App.css";
import { useState } from "react";

// Digamos que queremos hacer una aplicación que contenga un componente para crear mensajes y otro componente para mostrar mensajes.

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // qué debemos hacer con el mensaje?
        props.onNewMessage(msg);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Message</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};

const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <pre>{props.message}</pre>
        </>
    );
};

function App() {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");

    const youveGotMail = (newMessage) => {
        setCurrentMsg(newMessage);
    };

    return (
        <>
            <MessageForm onNewMessage={youveGotMail} />
            <MessageDisplay message={currentMsg} />
        </>
    );
}

export default App;
