import styles from '../styles/Home.module.css';

export default function StudentInfo({ name, number }) {
  return (
    <div className={styles.studentInfo}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Student Number:</strong> {number}</p>
    </div>
  );
}
