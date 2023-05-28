import RegularButton from '../../buttons/regular-button/regular-button';
import './add-chat-modal_name.scss';

type Props = {
    change: React.Dispatch<React.SetStateAction<string>>,
    addChat: () => void;
}

export default function AddChatModal_Name({ change, addChat }: Props) {
    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        change(event.target.value)
    } 
    return (
        <div className="add-chat">
            <span className='add-chat__title'>Название</span>
            <input className="add-chat__input" onChange={(event) => onChangeName(event)}></input>
            <div className='add-chat-modal__buttons'>
                <RegularButton type='only-text'>Отмена</RegularButton>
                <RegularButton type='only-text' onClick={() => addChat()}>Создать</RegularButton>
            </div>
        </div>
    )
}