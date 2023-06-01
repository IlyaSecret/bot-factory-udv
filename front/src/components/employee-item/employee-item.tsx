import { Link} from 'react-router-dom';
import { IEmployee } from '../../types/IEmployee';
import './employee-item.scss';
import { useState } from 'react';
import RegularButton from '../buttons/regular-button/regular-button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteUserFromChatAction } from '../../store/api-actions';

type EmployeeItemProps = {
  employee: IEmployee;
  withAdditional?: boolean;
};

export default function EmployeeItem({
  employee,
  withAdditional,
}: EmployeeItemProps) {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useAppDispatch();
    const currentChat = useAppSelector(state => state.chats.currentChat);
    const handleMouseEnter = (): void => {
        setIsHovered(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    const deleteEmployee = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        if (currentChat) {
            event.preventDefault();
            event.stopPropagation();
            const data = {
                chatId: currentChat.id,
                userId: employee.id
            }
            dispatch(deleteUserFromChatAction(data))
        }
    }

  return (
    <Link to={`/employees/${employee.id}`} className="employee-item-link">
      <div
        className="employee-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="employee-item_avatar" alt="alt" />
        <p className="employee-item__name">{employee.full_name}</p>
        <p className="employee-item__tg">@{employee.tg_username}</p>
        <p className="employee-item__role">******</p>
      </div>
      {withAdditional ? (
              <div className="additional-info"
              onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
              >
                  <div
                      className={isHovered ? "additional-button" : "additional-hidden"}
                      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => deleteEmployee(event)}
                  >
              <RegularButton type='only-text'>Удалить из чата</RegularButton>
            </div>
        </div>
      ) : null}
    </Link>
  );
}
