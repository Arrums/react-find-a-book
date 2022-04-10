import BookCard from "./../../components/BookCard";
import Footer from "./../../components/Footer/Footer";
import styles from "./BookList.module.scss";

const BookList = ({ books }) => {
	return (
		<>
			<section className={styles.BookList__Grid}>
				{books.map((book) => {
					return <BookCard key={book?.id} book={book} />;
				})}
			</section>
			<Footer />
		</>
	);
};

export default BookList;
