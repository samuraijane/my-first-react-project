const Modal = ({ action, message }) => {
  return (
    <div className="modal" onClick={action}>{message}</div>
  )
};

export default Modal;