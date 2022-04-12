import styles from "./ModalBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { bookProcessor } from "../../assets/bookProcessor";

const ModalBox = ({ show, book, onClose }) => {
	const item = bookProcessor(book);

	const handleClose = () => {
		onClose();
	};

	if (!show) {
		return null;
	}
	return (
		<section className={styles.Overlay} onClick={handleClose}>
			<div className={styles.Overlay__Inner}>
				<span className={styles.Close} onClick={handleClose}>
					<FontAwesomeIcon icon={faSquareXmark} />
				</span>
				<div>
					<img
						className={styles.Overlay__Inner__Img}
						src={item["Thumbnail"]}
						alt="cover"
					/>
					<p className={styles.Overlay__Inner__Info}>Title:</p>
					<p>{item["Title"]}</p>
					<p className={styles.Overlay__Inner__Info}>Authors:</p>
					<p>{item["Authors"]}</p>
					<p className={styles.Overlay__Inner__Info}>Publisher:</p>
					<p>{item["Publisher"]}</p>
					<a href={item["Preview"]} target="_blank">
						<button className={styles.Overlay__Inner__Btn}>Preview Book</button>
					</a>
				</div>
				<p>{item["Description"]}</p>
			</div>
		</section>
	);
};

export default ModalBox;
