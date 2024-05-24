import Formulary from '../form/Formulary';
import styles from '@/components/card/card.module.css';
import Logo from '../logo/Logo';
export default function Card() {
    return (
        <div className={styles.cardContainer}>
            <div className='flex md:items-center justify-center md:h-40 font-bold text-textColor text-3xl'>
                <h1>React System</h1>
            </div>
            <div className='lg:flex' >
                <Logo />
                <Formulary />
            </div>
        </div>
    )
}   