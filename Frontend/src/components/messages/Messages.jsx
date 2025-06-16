import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeleton/messageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastmessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastmessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start conversation</p>
      )}

      {!loading &&
        messages.length > 0 &&
        Array.isArray(messages) &&
        messages.map((message) => (
          <div key={message._id} ref={lastmessageRef}>
            <Message key={message._id} message={message} />
          </div>
        ))}
    </div>
  );
};
export default Messages;
