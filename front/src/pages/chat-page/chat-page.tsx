import { useParams } from 'react-router-dom';
import './chat-page.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addUsersToChat, getChatByIdAction, getChatUsersAction } from '../../store/api-actions';
import TextField from '../../components/text-field/text-field';
import RegularButton from '../../components/buttons/regular-button/regular-button';
import { Modal } from '../../components/modal/modal';
import AddUsersModal from '../../components/modals/add-users-modal/add-users-modal';
import EmployeeItem from '../../components/employee-item/employee-item';

export default function ChatPage() {
    const [isActive, setActive] = useState<boolean>(false);
    const id = Number(useParams().id);
    const dispatch = useAppDispatch();
    const currentChat = useAppSelector(state => state.chats.currentChat);
    const currentChatUsers = useAppSelector(state => state.chats.currentChatUsers);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

    const handleUserSelection = (userId: number) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };
    const addUsers = () => {
        const data = {
            chatId: id,
            users: selectedUsers
        }
        dispatch(addUsersToChat(data));
    }
    useEffect(() => {
        dispatch(getChatByIdAction(id));
        dispatch(getChatUsersAction(id));
    }, [])
    return (
        <div className="chat-page">
            <h1 className='chat-page__title'>{currentChat?.name}</h1>
            <div className='chat-page__info'>
                <TextField title='Название'>{currentChat?.name}</TextField>
                <TextField title='Ссылка'>{ currentChat?.tg_link}</TextField>
            </div>
            <div className='chat-page__cross'></div>
            <div className='chat-page__users-info'>
                <div className='chat-page__add-user'>
                    <RegularButton onClick={() => setActive(true)}>Добавить участника</RegularButton>
                </div>
                <div className='chat-page__users'>
                    {currentChatUsers?.map(user => <EmployeeItem employee={user} key={user.id}></EmployeeItem>)}
                </div>
            </div>
            <Modal active={isActive} setActive={setActive}>
                <AddUsersModal handleUserSelection={handleUserSelection} selectedUsers={selectedUsers} addUsers={addUsers} setActive={setActive}/>
            </Modal>
        </div>
    )
}