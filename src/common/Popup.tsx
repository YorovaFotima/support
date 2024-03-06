import './Popup.css';

interface PopupProps {
  title?: string
  message?: string
  color?: "red" | "green" | "blue"
  isOpen: boolean;
  onClose: () => void;
}

const Popup = ({
  title = "Success",
  message = "Record added!",
  color = "green",
  isOpen,
  onClose,
}: PopupProps) => {

  return (
    <div>
      {isOpen && (
        <div
          className="popup-wrapper"
          style={{ borderLeft: `3px solid ${color}` }}
        >
          <h2>{title}</h2>
          <p>{message}</p>
          <button className="close-btn" onClick={onClose}>x</button>
        </div>
      )}
    </div>
  );
}

export { Popup };
