import {  useEffect, useState } from "react";
import useConversation from "../zustand/useConversations";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        console.log("Fetched message data:", data);

        if (data.error) throw new Error(data.error);

        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          console.warn("Expected array but got:", data);
          setMessages([]); // fallback to prevent app crash
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
