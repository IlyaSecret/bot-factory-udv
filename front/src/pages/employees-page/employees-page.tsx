import './employees-page.scss';
import { Employees } from '../../mocks/employees';
import { IEmployee } from '../../types/IEmployee';
import EmployeeItem from '../../components/employee-item/employee-item';

export default function EmployeesPage() {
    return (
        <div className="employess-page">
            {Employees.map((empl: IEmployee) => <EmployeeItem employee={ empl } />)}
        </div>
    )
}