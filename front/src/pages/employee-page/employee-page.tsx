import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './employee-page.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addUsersToChat, deleteEmployee,  getEmployeeById, getUserChatsAction } from '../../store/api-actions';
import TextField from '../../components/text-field/text-field';
import RegularButton from '../../components/buttons/regular-button/regular-button';
import { Modal } from '../../components/modal/modal';
import AddUserToChatModal from '../../components/modals/add-user-to-chat-modal/add-user-to-chat-modal';
import Loader from '../../components/loader/loader';

export default function EmployeePage() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isActiveSecond, setIsActiveSecond] = useState<boolean>(false);
    const [selectedChats, setSelectedChats] = useState<number | null>(null);
    const id = Number(useParams().id)
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(state => state.employees.currentEmployee);
    const isLoading = useAppSelector(state => state.employees.isLoading);
    const userChats = useAppSelector(state => state.employees.currentEmployeeChats);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getEmployeeById(id))
    }, [])
    
    useEffect(() => {
        if (currentUser) {
            dispatch(getUserChatsAction(currentUser?.chats))
        }
    }, [currentUser, dispatch])
    

    const handleDelete = (): void => {
        dispatch(deleteEmployee(id))
        navigate("/employees")
    }

    const handleChatSelection = (chatId: number): void => {
            setSelectedChats(chatId);
    };

    const addEmmployeeToChat = async () => {
        if (selectedChats) {
            const data = {
                chatId: selectedChats,
                users: [id]
            }
            setIsActive(false);
            await dispatch(addUsersToChat(data))
            if (currentUser) {
                dispatch(getUserChatsAction(currentUser?.chats))
            }
        }
    }

    if (isLoading) {
        return <Loader />
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
                        {/* <TextField title='Теги'>{ currentUser?.tags[0]}</TextField> */}
                    </div>
                </div>
                <div className='employee-page__chats'>
                    <span>Чаты</span>
                    <div className='employee-page__chat-items'>
                        {userChats.map((chat) => 
                            <Link to={`/chats/${chat.id}`}>
                                <div className='user-chat'>
                                    <span>{ chat.name }</span>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
                <div className='employee-page__buttons'>
                    <RegularButton handleClick={() => setIsActive(true)}>Добавить в чат</RegularButton>
                    <RegularButton type='transparent'>Зарегистрировать</RegularButton>
                    <button className='delete-button' onClick={() => setIsActiveSecond(true)}>Уволить сотрудника</button>
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
            <Modal active={isActiveSecond} setActive={setIsActiveSecond}>
                <div className='delete-employee'>
                    <h3>Вы уверенны, что хотите уволить { currentUser?.last_name + " " + currentUser?.first_name}?</h3>
                    <div className='delete-employee__buttons'>
                        <RegularButton type='only-text' handleClick={() => setIsActiveSecond(false)}>Отмена</RegularButton>
                        <RegularButton type='only-text' handleClick={handleDelete}>Подвердить</RegularButton>
                    </div>
                    
                </div>
            </Modal>
        </div>
    )
}