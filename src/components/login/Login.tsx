import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.externalDiv}>

            <div className={styles.internalDiv}>
                <label htmlFor="usuario" className={styles.label}></label>
                <input type="email" id="usuario" placeholder="email@exemplo.com.br" name="usuario" required/>
            </div>

            <div className={styles.internalDiv} style={{marginTop: '4%'}}>
                <label htmlFor="senha" className={styles.input}></label>
                <input type="password" id="senha" placeholder="**********" name="senha" required/>
            </div>

            <button className={styles.loginButton}>Entrar</button>
            <button className={styles.secondaryButton}>Cadastrar novo usuário</button>
            <button className={styles.secondaryButton}>Esqueci minha senha</button>

        </div>
    );
}

export default Login