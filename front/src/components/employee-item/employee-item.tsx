import { IEmployee } from '../../types/IEmployee';
import './employee-item.scss';

type EmployeeItemProps = {
    employee: IEmployee
}

export default function EmployeeItem({employee} : EmployeeItemProps) {
    return (
        <div className="employee-item">
            <img src={employee.img} alt={employee.name} className='employee-item_avatar'></img>
            <p className='employee-item__name'>{employee.name}</p>
            <p className='employee-item__tg'>{ employee.telegramLink }</p>
            <p className='employee-item__role'>{ employee.role }</p>
        </div>
    )
}