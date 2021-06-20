import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo_header.svg" alt="Café com NBA"/>
                <span />
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active} prefetch>
                        <a className={styles.active}>Home</a>
                    </ActiveLink>
                    <ActiveLink href="/posts" activeClassName={styles.active} prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}