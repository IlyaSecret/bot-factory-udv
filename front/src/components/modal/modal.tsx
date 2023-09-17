import "./modal.scss";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[];
  step?: number;
};

export const Modal = ({ active, setActive, children, step }: Props) => {
  const setModalActive = () => {
    setActive(false);
  };

  return (
    <div className={active ? "modal-window active" : "modal-window"} onClick={setModalActive}>
      <div className={active ? "modal-window__content active" : "modal-window__content"} onClick={(e) => e.stopPropagation()}>
        {Array.isArray(children) ? children[step ?? 0] : children}
      </div>
    </div>
  );
};