import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import RegularButton from "../../buttons/regular-button/regular-button";
import "./add-users-modal.scss";
import { getAllEmployeesAction } from "../../../store/api-actions";

type Props = {
    handleUserSelection: (userId: number) => void,
    selectedUsers: Array<number>,
    addUsers: () => void,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddUsersModal({handleUserSelection, selectedUsers, addUsers, setActive}: Props) {
    const users = useAppSelector(state => state.employees.users);
    const currentChatUsers = useAppSelector(state => state.chats.currentChatUsers);
    const filteredUsers = users.filter((el) => {
        const userId = el.id;
        return !currentChatUsers?.some((user) => user.id === userId);
      });
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllEmployeesAction())
    }, [])



    return (
        <div className="add-users">
            <h1>Добавить участников</h1>
            <div className="users">
                {filteredUsers.map(el => 
                    <div key={el.id} className="user-item">
                        <input
                            type="checkbox"
                            checked={selectedUsers.includes(el.id)}
                            onChange={() => handleUserSelection(el.id)}
                        />
                        <label>{el.full_name}</label>
                    </div>
                )}
            </div>
            <div className='add-chat-modal__buttons'>
                <RegularButton type='only-text' handleClick={() => setActive(false)}>Отмена</RegularButton>
                <RegularButton type='only-text' handleClick={() => addUsers()}>Добавить</RegularButton>
            </div>
        </div>
    );
}