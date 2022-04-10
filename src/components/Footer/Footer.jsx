import styles from "./Footer.module.scss";

const Footer = () => {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};
	return (
		<footer className={styles.Footer}>
			<p>Built by Arrum in {getCurrentYear()}.</p>
		</footer>
	);
};

export default Footer;
