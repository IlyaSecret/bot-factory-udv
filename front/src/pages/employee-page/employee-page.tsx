import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './employee-page.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addUsersToChat, deleteEmployee,  getEmployeeById } from '../../store/api-actions';
import TextField from '../../components/text-field/text-field';
import RegularButton from '../../components/buttons/regular-button/regular-button';
import { Modal } from '../../components/modal/modal';
import AddUserToChatModal from '../../components/modals/add-user-to-chat-modal/add-user-to-chat-modal';

export default function EmployeePage() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [selectedChats, setSelectedChats] = useState<number | null>(null);
    const id = Number(useParams().id)
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(state => state.employees.currentEmployee);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getEmployeeById(id))
    }, [])


    const handleDelete = (): void => {
        dispatch(deleteEmployee(id))
        navigate("/employees")
    }

    const handleChatSelection = (chatId: number): void => {
        
            setSelectedChats(chatId);
    };

    const addEmmployeeToChat = (): void => {
        const data = {
            chatId: selectedChats,
            users: [id]
        }
        dispatch(addUsersToChat(data))
    }

    return (
        <div className='employee-page'>
            <div className='employee-page__wrap'>
                <div className='employee-page__info'>
                    <div className='employee-page__fullname'>
                        <TextField title='Фамилия'>{currentUser?.first_name}</TextField>
                        <TextField title='Имя'>{ currentUser?.last_name }</TextField>
                        <TextField title='Отчество'>{currentUser?.patronymic}</TextField>
                    </div>
                    <div className='employee-page__links'>
                        <TextField title='Telegram'>{ currentUser?.tg_username }</TextField>
                        <TextField title='Теги'>{ currentUser?.tags[0]}</TextField>
                    </div>
                </div>
                <div className='employee-page__chats'>
                    <span>Чаты</span>
                    <div className='employee-page__chat-items'>
                        {/* {ChatsMock.map((chat) => <ChatItem chat={chat} key={chat.name}></ChatItem>)} */}
                    </div>
                </div>
                <div className='employee-page__buttons'>
                    <RegularButton onClick={() => setIsActive(true)}>Добавить в чат</RegularButton>
                    <RegularButton type='transparent'>Зарегистрировать</RegularButton>
                    <button className='delete-button' onClick={handleDelete}>Уволить сотрудника</button>
                </div>
            </div>
            <Modal active={isActive} setActive={setIsActive}>
                <AddUserToChatModal
                    handleChatSelection={handleChatSelection}
                    selectedChats={selectedChats}
                    addToChat={addEmmployeeToChat}
                    setActive={setIsActive}
                ></AddUserToChatModal>
            </Modal>
        </div>
    )
}