//Style import
import "../../styles/components/shared/Modal.css";

function Modal({ children }) {
	return (
		<div className="modal">
			<div className="modal_content">{children}</div>
		</div>
	);
}

export default Modal;
