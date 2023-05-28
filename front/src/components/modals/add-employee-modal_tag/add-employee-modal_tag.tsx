import RegularButton from '../../buttons/regular-button/regular-button'
import Tag from '../../tag/tag'
import './add-employee-modal_tag.scss'

type Props = {
    nextStep: React.Dispatch<React.SetStateAction<number>>,
    change: React.Dispatch<React.SetStateAction<string>>,
    addUser: () => void
}

export default function AddEmployeeModal_Tag({ nextStep, addUser }: Props) {
    const handleNextClick = (): void => {
        addUser()
        nextStep(prev => prev + 1)
    } 
    const handlePrevClick = (): void => {
        nextStep(prev => prev - 1);
    }
    return (
        <div className="add-employee-modal">
            <div className="add-employee-modal__title">
                Добавить сотрудника
            </div>
            <div className="add-employee-modal__inputs">
                <div className='add-employee-modal__input-item'>
                    <span className='add-employee-modal__type'>Теги</span>
                    <input className='add-employee-modal__input' placeholder='Теги'></input>
                    <Tag tag={{id: 1, name: "Новый"}}></Tag>
                    <Tag tag={{id: 1, name: "Ещё"}}></Tag>
                </div>
            </div>
            <div className='add-employee-modal__buttons'>
                <RegularButton type='only-text' onClick={handlePrevClick}>Назад</RegularButton>
                <RegularButton type='only-text' onClick={handleNextClick}>Далее</RegularButton>
            </div>
        </div>
    )
}