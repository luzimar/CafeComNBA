import styles from './styles.module.scss';

export function NavigateButton() {
    return (
        <button type="button" className={styles.navigateButton}>
            Ir para os posts
        </button>
    );
}