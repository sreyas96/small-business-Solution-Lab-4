import Head from 'next/head';
import styles from '../styles/Home.module.css';
import StudentInfo from '../components/StudentInfo';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My FIRST NEXT JS PROJECT</title>
        <meta name="description" content="Student Info Component Lab" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My FIRST NEXT JS PROJECT</h1>
        <StudentInfo name="Sreyas Saji" number="8912455" />
      </main>
    </div>
  );
}
