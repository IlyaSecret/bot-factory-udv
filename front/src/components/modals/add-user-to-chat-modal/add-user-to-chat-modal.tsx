import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import './add-user-to-chat-modal.scss';
import { getAllChatsAction } from '../../../store/api-actions';
import RegularButton from '../../buttons/regular-button/regular-button';


type Props = {
    selectedChats: number | null,
    handleChatSelection: (id: number) => void,
    addToChat: () => void,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddUserToChatModal({selectedChats, handleChatSelection, addToChat, setActive}: Props) {

    const chats = useAppSelector(state => state.chats.chats);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllChatsAction())
    }, [])
    

    return (
        <div className='add-to-chat'>
            <h1>Список чатов</h1>
            <div className='add-to-chat__item'>
                {chats?.map(el => 
                    <div key={el.id} className="chat-item-add">
                        <input
                            type="radio"
                            checked={selectedChats == el.id}
                            onChange={() => handleChatSelection(el.id)}
                        />
                        <div className='chat-item-add__info'>
                            <label>{el.name}</label>
                            <span>???</span>
                        </div>
                    </div>
                )}
            </div>
            <div className='add-chat-modal__buttons'>
                <RegularButton type='only-text' onClick={() => setActive(false)}>Отмена</RegularButton>
                <RegularButton type='only-text' onClick={() => addToChat()}>Добавить</RegularButton>
            </div>
        </div>
    )
    
}