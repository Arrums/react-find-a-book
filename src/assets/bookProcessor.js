export const bookProcessor = (book) => {
	const bookTitle = book.volumeInfo.title
		? book.volumeInfo.title
		: "Title Unknown";

	const authors = book.volumeInfo.authors
		? book.volumeInfo.authors.join(", ")
		: "Author Unknown";

	const thumbnail =
		book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
			? book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
			: "https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png";

	const publisher = book.volumeInfo.publisher
		? book.volumeInfo.publisher
		: "Unknown Publisher";

	let desc = book.volumeInfo.description
		? book.volumeInfo.description
		: "This book doesn't have any description";

	if (desc !== undefined && desc.length > 500) {
		const endingDot = desc.indexOf(".", 500);
		desc = desc.slice(0, endingDot) + ".";
	}

	const pre = book.volumeInfo.previewLink;

	return {
		Title: bookTitle,
		Authors: authors,
		Thumbnail: thumbnail,
		Publisher: publisher,
		Description: desc,
		Preview: pre,
	};
};
