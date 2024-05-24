import style from '@/components/form/formulary.module.css';

export default function Formulary() {
    return (
        <div  >
            <form action="" >
                <div className={style.formContent}>
                    <div className={style.formContentFields}>
                        <label htmlFor="username" className='text-textColor font-bold mr-5'>Usuário:</label>
                        <input type="text" id="username" name="username" placeholder='email@exemplo.com.br' />
                    </div>
                    <div className={style.formContentFields}>
                        <label htmlFor="password" className='text-textColor font-bold mr-5'>Senha:</label>
                        <input type="password" id="password" name="password" placeholder='••••••••' />
                    </div>
                    <button type='submit'>Entrar</button>
                </div>
            </form>
            <div className={style.alternative}>
                <a href="">Cadastrar novo usuário</a>
                <a href="">Esqueci minha senha</a>
            </div>
        </div>
    )
}