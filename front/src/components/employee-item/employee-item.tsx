import { Link } from 'react-router-dom';
import { IEmployee } from '../../types/IEmployee';
import './employee-item.scss';

type EmployeeItemProps = {
    employee: IEmployee
}

export default function EmployeeItem({employee} : EmployeeItemProps) {
    return (
        <Link to={`/employees/${employee.id}`}>
            <div className="employee-item">
                <img className='employee-item_avatar' alt="alt"></img>
                <p className='employee-item__name'>{employee.full_name}</p>
                <p className='employee-item__tg'>@{ employee.tg_username }</p>
                <p className='employee-item__role'>******</p>
            </div>
        </Link>
    )
}