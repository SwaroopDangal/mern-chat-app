import { useEffect } from "react";
import useConversation from "../zustand/useConversations";
import notificationSound from "../assets/sound/notification.mp3";
import { useSocketContext } from "../context/SocketContext"; // ✅ Make sure this file exists with the exact name!

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { setMessages } = useConversation();

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      console.log("New message from socket:", newMessage);
      newMessage.shouldShake = true;

      const sound = new Audio(notificationSound);
      sound.play();

      // ✅ Ensure append mode works with function setter
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket?.on("newMessage", handleNewMessage);

    return () => {
      socket?.off("newMessage", handleNewMessage);
    };
  }, [socket, setMessages]);
};

export default useListenMessages;
