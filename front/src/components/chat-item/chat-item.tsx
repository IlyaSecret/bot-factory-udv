import { Link } from 'react-router-dom';
import { IChat } from '../../types/IChat';
import './chat-item.scss';

type ChatItemProps = {
    chat: IChat
}

export default function ChatItem({chat}: ChatItemProps) {
    return (
        <Link to={`/chats/${chat.id}`}>
            <div className='chat-item'>
                <img src="/images/user.jpg" className='chat-item__image' alt={chat.name}></img>
                <div className='chat-item__info'>
                    <p className='chat-item__name'>
                        {chat.name}
                    </p>
                    <p className='chat-item__members'>
                        ? чел
                    </p>
                </div>
            </div>
        </Link>
    );
}