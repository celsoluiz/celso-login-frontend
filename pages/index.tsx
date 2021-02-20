import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MainTitle from '../components/common/MainTitle'
import LoginForm from '../components/Form/LoginForm'
import Container from '../components/common/Container'
import LeadText from '../components/common/LeadText'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Celso Luiz - Challenge Login</title>
      </Head>

      <main>
        <Container>
          <MainTitle title="Olá, seja bem-vindo!" />
          <LeadText>Para acessar a plataforma, faça seu login.</LeadText>
          <LoginForm />
          <p>
            Esqueceu seu login ou senha?
            <span>
              Clique
              <Link href="/">
                <a>aqui</a>
              </Link>
            </span>
          </p>
        </Container>
      </main>
    </div>
  )
}

export default Home
