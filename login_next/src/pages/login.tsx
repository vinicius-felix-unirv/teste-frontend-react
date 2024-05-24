import Card from '@/components/card/Card';
import Footer from '@/components/footer/Footer';
import styles from '@/styles/login.module.css';

export default function Login() {
  return (

    <main className={styles.pageBackground}>
      <div className='flex items-center justify-center'>
        <Card />
      </div>
      <Footer />
    </main>

  );
}