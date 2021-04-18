import { GetStaticProps } from 'next';
import { useSession } from 'next-auth/client';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { NavigateButton } from '../components/NavigateButton';
import { stripe } from '../services/stripe';
import styles from '../styles/home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  const [session] = useSession();
  return (
    <>
      <Head>
        <title>Inicio | Café com NBA</title>
      </Head>
      
        { session ? (
          <main className={styles.containerLoggedUser}>
            <section className={styles.heroLoggedUser}>
              <img src={session.user.image} alt={session.user.name}/>
              <span>🤾‍♂️ {session.user.name}</span>
              <p>
                Posts lidos na semana: 3
              </p>
              <p>
                Posts lidos no mês: 10
              </p>
              <p>
                Posts lidos no ano: 30
              </p>
              <NavigateButton />
            </section>
          </main>) : (
          <main className={styles.container}>
            <section className={styles.hero}>
              <span>🤾‍♂️ Olá, bem vindo ao Café com NBA</span>
              <h1>
                Fique por dentro de tudo que acontece na <span>NBA</span>
              </h1>

              <p>
                Tenha acesso a todo o conteúdo<br />
                <span>por apenas {product.amount}/mês</span>
              </p>

              <SubscribeButton />
            </section>
            <img src="/images/logo_home.svg" alt="Café com NBA"/>
            </main>
        )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const price = await stripe.prices.retrieve('price_1IhhOXHCcYh4iYLKorHC1Qn8');
  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount/100)
  };

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24 horas
  };
}
