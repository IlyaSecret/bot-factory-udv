import './employees-page.scss';
import { IEmployee } from '../../types/IEmployee';
import EmployeeItem from '../../components/employee-item/employee-item';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { addEmployee, getAllEmployeesAction } from '../../store/api-actions';
import RegularButton from '../../components/buttons/regular-button/regular-button';
import { Modal } from '../../components/modal/modal';
import AddEmployeeModal from '../../components/modals/add-employee-modal_name/add-employee-modal';
import AddEmployeeModal_Tg from '../../components/modals/add-employee-modal_tg/add-employee-modal_tg';
import AddEmployeeModal_Tag from '../../components/modals/add-employee-modal_tag/add-employee-modal_tag';
import Loader from '../../components/loader/loader';

export default function EmployeesPage() {
    const dispatch = useAppDispatch();
    const employees = useAppSelector(state => state.employees.users);
    const isLoading = useAppSelector(state => state.employees.isLoading)
    const [isModalActive, setModalActive] = useState(false);
    const [step, setStep] = useState(0);
    const [fullName, setFullName] = useState({
        firstname: "",
        lastname: "",
        surname: ""
    })
    const [username, setUsername] = useState<string>("");
    const [tag, setTag] = useState<string>("");
    const handleCloseModal = (): void =>  {
        setModalActive(false);
        setStep(0);
    }
    const addUser = (): void => {
        const userData = {
            tg_username: username,
            first_name: fullName.lastname,
            last_name: fullName.firstname,
            patronymic: fullName.surname,
        }
        dispatch(addEmployee(userData))
        dispatch(getAllEmployeesAction())
    }
    useEffect(() => {
        dispatch(getAllEmployeesAction())
    }, [dispatch])

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="employess-page">
            <div className='employees-page__add'>
                <RegularButton handleClick={() => setModalActive(true)}>Добавить сотрудника</RegularButton>
            </div>
            
            <div className='employees-page__items'>
                {employees.map((empl: IEmployee) => <EmployeeItem employee={empl} key={empl.id} />)}
            </div>
            <Modal active={isModalActive} setActive={handleCloseModal}  step={step}>
                <AddEmployeeModal nextStep={setStep} change={setFullName} closeModal={setModalActive}></AddEmployeeModal>
                <AddEmployeeModal_Tg nextStep={setStep} change={setUsername} addUser={addUser} setActive={setModalActive}></AddEmployeeModal_Tg>
                {/* <AddEmployeeModal_Tag nextStep={setStep} change={setTag} addUser={addUser}></AddEmployeeModal_Tag> */}
            </Modal>
        </div>
    )
}