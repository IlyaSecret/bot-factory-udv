import { useNavigate, useParams } from 'react-router-dom';
import './chat-page.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addUsersToChat, deleteChatAction, getAllChatsAction, getChatByIdAction, getChatUsersAction } from '../../store/api-actions';
import TextField from '../../components/text-field/text-field';
import RegularButton from '../../components/buttons/regular-button/regular-button';
import { Modal } from '../../components/modal/modal';
import AddUsersModal from '../../components/modals/add-users-modal/add-users-modal';
import EmployeeItem from '../../components/employee-item/employee-item';
import Loader from '../../components/loader/loader';

export default function ChatPage() {
    const [isActive, setActive] = useState<boolean>(false);
    const [isActiveSecond, setActiveSecond] = useState<boolean>(false);
    const id = Number(useParams().id);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentChat = useAppSelector(state => state.chats.currentChat);
    const currentChatUsers = useAppSelector(state => state.chats.currentChatUsers);
    const isLoading = useAppSelector(state => state.chats.isLoading);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

    const handleUserSelection = (userId: number) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };
    const addUsers = async () => {
        const data = {
            chatId: id,
            users: selectedUsers
        }
        setActive(false);
        await dispatch(addUsersToChat(data));
        if (currentChat) {
            dispatch(getChatUsersAction(currentChat?.id))
        }
    }
    const handleDeleteChat = async () => {
        if (currentChat) {
            navigate("/chats")
            await dispatch(deleteChatAction(currentChat.id))
            dispatch(getAllChatsAction())
        }
    }
    useEffect(() => {
        dispatch(getChatByIdAction(id));
        dispatch(getChatUsersAction(id));
    }, [dispatch])

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="chat-page">
            <h1 className='chat-page__title'>{currentChat?.name}</h1>
            <div className='chat-page__info'>
                <TextField title='Название'>{currentChat?.name}</TextField>
                <TextField title='Ссылка'>{ currentChat?.tg_link}</TextField>
            </div>
            <div className='chat-page__cross'></div>
            <div className='chat-page__users-info'>
                <div className='chat-page__buttons'>
                    <div className='chat-page__add-user'>
                        <RegularButton handleClick={() => setActive(true)}>Добавить участника</RegularButton>
                    </div>
                    <div className='chat-page__delete-chat'>
                        <RegularButton type='transparent' handleClick={() => setActiveSecond(true)}>Удалить чат</RegularButton>
                    </div>
                </div>
                <div className='chat-page__users'>
                    {currentChatUsers?.map(user => <EmployeeItem employee={user} key={user.id} withAdditional={true}></EmployeeItem>)}
                </div>
            </div>
            <Modal active={isActive} setActive={setActive}>
                <AddUsersModal handleUserSelection={handleUserSelection} selectedUsers={selectedUsers} addUsers={addUsers} setActive={setActive}/>
            </Modal>
            <Modal active={isActiveSecond} setActive={setActiveSecond}>
                <div className='delete-employee'>
                    <h3>Вы уверенны, что хотите уволить { currentChat?.name }?</h3>
                    <div className='delete-employee__buttons'>
                        <RegularButton type='only-text' handleClick={() => setActiveSecond(false)}>Отмена</RegularButton>
                        <RegularButton type='only-text' handleClick={handleDeleteChat}>Подвердить</RegularButton>
                    </div>
                        
                </div>
            </Modal>
        </div>
    )
}