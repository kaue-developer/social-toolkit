import styles from './not-found.module.css';

//Página personalizada para erros 404
export default function Erro() {
    return(
        <div className={styles.errorContainer}>
            <div className={styles.errorHeader}>
              <h1 className={styles.title}>Social Toolkit</h1>
              <p className={styles.description}>⚠️ Site em construção</p>
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.errorNumber}>404</h1>
            </div>
            <div className={styles.titleContainer}>
              <h2 className={styles.subTitle}>Acesse a documentação pelo Github:</h2>
              <a className={styles.apiLink} href='https://github.com/kaue-developer/social-toolkit' target='_blank'>https://github.com/kaue-developer/social-toolkit</a>
            </div>
        </div>
    );
}