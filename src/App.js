import { useState, useEffect } from "react";
import BookList from "./containers/BookList";
import Home from "./containers/Home/Home";

const App = () => {
	//setting state for the books
	const [booksData, setBooks] = useState([]);
	//setting state for the search result
	const [search, setSearch] = useState("");

	const getBooks = async (query) => {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`,
		);

		const data = await response.json();
		setBooks(data.items);
	};

	const handleSubmit = (newSearch) => {
		setSearch(newSearch);
	};

	useEffect(() => {
		if (search !== "" || undefined) {
			getBooks(search);
		}
	}, [search]);

	return (
		<>
			<Home onSubmit={handleSubmit} setSearch={setSearch} />
			<BookList books={booksData} />
		</>
	);
};

export default App;
