import { IChat } from '../../types/IChat';
import './chat-item-small.scss';

type Props = {
    chat: IChat
}

export default function ChatItemSmall({chat}: Props) {
    return (
        <div className='chat-item-small'>
            <div className="add-employee-modal__inputs">
                <div className='add-employee-modal__input-item'>
                    <span className='add-employee-modal__type'>Telegram</span>
                    <input
                        className='add-employee-modal__input'
                        placeholder='Telegram'
                        // onChange={(event) => onChangeUsername(event)}
                    ></input>
                </div>
            </div>
        </div>
    )
}