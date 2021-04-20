import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, useSession, signOut } from 'next-auth/client';

export function SignInButton() {
    const [session] = useSession();
    return session ?  (
        <button type="button" className={styles.signInButton} onClick={() => signOut()}>
            <img src={session.user.image} alt="avatar" className={styles.avatar}/>
            { session.user.name }
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) :  (
        <button 
            type="button" 
            className={styles.signInButton}
            onClick={() => signIn('github')}
            >
            <FaGithub color="#eba417"/>
            Entrar com Github
        </button>
    )
}