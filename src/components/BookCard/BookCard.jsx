import { useState } from "react";
import ModalBox from "../ModalBox/ModalBox";
import { bookProcessor } from "../../assets/bookProcessor";
import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
	//processing the book array
	const item = bookProcessor(book);

	//set state variable for modal box
	const [show, setShow] = useState(false);

	//creating function to change the stat

	const showModal = () => {
		setShow(true);
	};

	const closeModal = () => {
		setShow(false);
	};

	return (
		<>
			<section className={styles.BookCard} onClick={showModal}>
				<img src={item["Thumbnail"]} alt="Book" />
				<h3>{item["Title"]}</h3>
				<h4>by {item["Authors"]}</h4>
			</section>
			<ModalBox show={show} book={book} onClose={closeModal} />
		</>
	);
};

export default BookCard;
