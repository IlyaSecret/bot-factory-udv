import RegularButton from '../../buttons/regular-button/regular-button'
import './add-employee-modal.scss'

type Props = {
    nextStep: React.Dispatch<React.SetStateAction<number>>,
    change: React.Dispatch<React.SetStateAction<{
        firstname: string;
        lastname: string;
        surname: string;
    }>>
}


export default function AddEmployeeModal({ nextStep, change }: Props) {
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        change(prev => ({...prev, firstname: e.target.value}))
    }
    const onChangeLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
        change(prev => ({...prev, lastname: e.target.value}))
    }
    const onChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        change(prev => ({...prev, surname: e.target.value}))
    }



    return (
        <div className="add-employee-modal">
            <div className="add-employee-modal__title">
                Добавить сотрудника
            </div>
            <div className="add-employee-modal__inputs">
                <div className='add-employee-modal__input-item'>
                    <span className='add-employee-modal__type'>Фамилия</span>
                    <input
                        className='add-employee-modal__input'
                        placeholder='Фамилия'
                        onChange={(event) => onChangeName(event)}
                    ></input>
                </div>
                <div className='add-employee-modal__input-item'>
                    <span className='add-employee-modal__type'>Имя</span>
                    <input
                        className='add-employee-modal__input'
                        placeholder='Имя'
                        onChange={(event) => onChangeLastname(event)}
                    ></input>
                </div>
                <div className='add-employee-modal__input__input-item'>
                    <span className='add-employee-modal__type'>Отчество</span>
                    <input
                        className='add-employee-modal__input'
                        placeholder='Отчество'
                        onChange={(event) => onChangeSurname(event)}
                    ></input>
                </div>
            </div>
            <div className='add-employee-modal__buttons'>
                <RegularButton type='only-text'>Отмена</RegularButton>
                <RegularButton type='only-text' handleClick={() => nextStep(prev => prev + 1)}>Далее</RegularButton>
            </div>
        </div>
    )
}