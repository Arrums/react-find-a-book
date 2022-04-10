import React from "react";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Home = ({ onSubmit, setSearch }) => {
	//setting input value for the submit button
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setSearch(event.target.value);
		setInputValue(event.target.value);
	};

	const handleClick = () => {
		onSubmit(inputValue);
	};

	return (
		<>
			<header className={styles.Header}>
				<h1>
					What <span className={styles.Header__Highlight}>books</span> are you
					looking for?
				</h1>
				<p>
					Explore books selection that are available at Google Books. Simply
					search the book name down below.
				</p>
				<div className={styles.SearchWrap}>
					<label htmlFor="searchInput"></label>
					<input
						className={styles.SearchWrap__Input}
						id="searchInput"
						type="text"
						onChange={handleChange}
						value={inputValue}
					/>
					<button onClick={handleClick} className={styles.SearchWrap__Btn}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
			</header>
		</>
	);
};

export default Home;
