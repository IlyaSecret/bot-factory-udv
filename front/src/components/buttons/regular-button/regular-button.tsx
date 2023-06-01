import './regular-button.scss';

type Props = {
    children: string | JSX.Element | JSX.Element[],
    type?: "transparent" | "only-text";
    handleClick?: () => void;
}

export default function RegularButton({ children, type, handleClick: onClick }: Props) {
    return (
        <button className={`${type === "transparent" && "transparent-button"} ${!type && "regular-button"} ${type === "only-text" && "only-text"}`} onClick={onClick}>
        {children}
    </button>
    )
}