import { useCallback, useEffect, useRef } from 'react';

const createId = (name) => {
  const key = `__channel__${name}`;
  let id = localStorage.getItem(key);
  if (!id) {
    id = String(Date.now());
    localStorage.setItem(key, id);
  }
  return id;
};

const sendMessage = (channel, message) => {
  if (
    channel &&
    channel.postMessage &&
    typeof channel.postMessage === 'function'
  ) {
    channel.postMessage(message);
  }
};

// 使用 BroadcastChannel 封装一个 useChannel hook
export const useChannel = (channelName, onMessage) => {
  const channelRef = useRef(null);
  const send = useCallback((message) => {
    sendMessage(channelRef.current, message);
  }, []);

  useEffect(() => {
    const channel = new BroadcastChannel(channelName);
    // 频道的id
    channel.id = createId(channelName);
    channel.listener = new Set();
    channel.onmessage = (event) => {
      const message = event.data;
      if (onMessage) onMessage(message);
    };

    channelRef.current = channel;

    sendMessage(channel, { type: 'register', id: channel.id });
    channel.listener.add(channel.id);

    return () => {
      sendMessage(channel, { type: 'unregister', id: channel.id });
      channel.close();
    };
  }, [channelName, onMessage]);

  return { channelRef, send };
};
