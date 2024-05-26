import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footerDiv}>
            <p className={styles.footerParagraph}>Engenharia de Software</p>
            <p className={styles.footerParagraph}>UniRV @{new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer