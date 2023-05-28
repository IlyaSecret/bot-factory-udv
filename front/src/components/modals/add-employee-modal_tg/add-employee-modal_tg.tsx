import RegularButton from '../../buttons/regular-button/regular-button'
import Tag from '../../tag/tag'
import './add-employee-modal_tg.scss'

type Props = {
    nextStep: React.Dispatch<React.SetStateAction<number>>,
    change: React.Dispatch<React.SetStateAction<string>>
}

export default function AddEmployeeModal_Tg({ nextStep, change }: Props) {
    
    const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        change(event.target.value)
    } 

    return (
        <div className="add-employee-modal">
            <div className="add-employee-modal__title">
                Добавить сотрудника
            </div>
            <div className="add-employee-modal__inputs">
                <div className='add-employee-modal__input-item'>
                    <span className='add-employee-modal__type'>Telegram</span>
                    <input
                        className='add-employee-modal__input'
                        placeholder='Telegram'
                        onChange={(event) => onChangeUsername(event)}
                    ></input>
                </div>
            </div>
            <div className='add-employee-modal__buttons'>
                <RegularButton type='only-text' onClick={() => nextStep(prev => prev - 1)}>Назад</RegularButton>
                <RegularButton type='only-text' onClick={() => nextStep(prev => prev + 1)}>Далее</RegularButton>
            </div>
        </div>
    )
}