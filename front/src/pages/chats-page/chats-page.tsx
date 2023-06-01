import { useEffect, useState } from "react";
import ChatItem from "../../components/chat-item/chat-item";
import "./chats-page.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addChatAction, getAllChatsAction } from "../../store/api-actions";
import Loader from "../../components/loader/loader";
import RegularButton from "../../components/buttons/regular-button/regular-button";
import AddChatModal_Name from "../../components/modals/add-chat-modal_name/add-chat-modal_name";
import { Modal } from "../../components/modal/modal";

export default function ChatsPage() {
    const [isActive, setActive] = useState<boolean>(false);
    const [chatName, setChatName] = useState<string>("")
    const dispatch = useAppDispatch();
    const chats = useAppSelector(state => state.chats.chats)
    const addChat = (): void => {
        dispatch(addChatAction(chatName));
        setActive(false);
    }
    useEffect(() => {
        dispatch(getAllChatsAction())
    }, [dispatch])

    if (!chats) {
        return <Loader></Loader>
    }
    return (
        <div className="chats-page">
            <div className="chats-page__add">
             <RegularButton handleClick={() => setActive(true)}>Добавить чат</RegularButton>
            </div>
            <div className="chat-page__list">
                {chats.map(chat => <ChatItem chat={chat} key={chat.name}/>)}
            </div>
            <Modal active={isActive} setActive={setActive}>
                <AddChatModal_Name change={setChatName} addChat={addChat}></AddChatModal_Name>
            </Modal>
        </div>
    )
}