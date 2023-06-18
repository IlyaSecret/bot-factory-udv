import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IChat } from '../../types/IChat';
import './chat-item.scss';
import { getRandomColor } from '../../utils/getRandomColor';

type ChatItemProps = {
  chat: IChat;
};

export default function ChatItem({ chat }: ChatItemProps) {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    setBackgroundColor(getRandomColor());
  }, []);

  return (
    <Link to={`/chats/${chat.id}`}>
      <div className="chat-item">
        <div className="chat-item__image" style={{ backgroundColor }}>
          <span className="chat-item__letter">
            {chat.name[0].toUpperCase()}
          </span>
        </div>
        <div className="chat-item__info">
          <p className="chat-item__name">{chat.name}</p>
          <p className="chat-item__members"></p>
        </div>
      </div>
    </Link>
  );
}
