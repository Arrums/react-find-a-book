import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
	const bookTitle = book.volumeInfo.title
		? book.volumeInfo.title
		: "Title Unknown";
	const authors = book.volumeInfo.authors
		? book.volumeInfo.authors
		: "Author Unknown";
	let description = book.volumeInfo.description
		? book.volumeInfo.description
		: "This book doesn't have any description";

	const thumbnail =
		book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
			? book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
			: "https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png";

	if (description !== undefined && description.length > 500) {
		description = description.slice(0, 500) + " ...";
	}

	return (
		<section className={styles.BookCard}>
			<img src={thumbnail} alt="Book" />
			<h3>{bookTitle}</h3>
			<h4>by {authors}</h4>
			<p>{description}</p>
		</section>
	);
};

export default BookCard;
