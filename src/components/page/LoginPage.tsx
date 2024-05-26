import logo from '../../assets/logo.jpeg'
import Login from "../login/Login.tsx";
import Footer from "../footer/Footer.tsx";
import styles from './LoginPage.module.css'

function LoginPage() {
    return (
        <>
            <main>
                <div className={styles.container}>
                    <div className={styles.whiteBox}>
                        <h1>React System</h1>
                        <div>
                            <img className={styles.logo} src={logo} alt="Logo UniRV"/>
                            <Login/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default LoginPage