import styled from 'styled-components'
import Head from 'next/head'
//import ExperienceList from "../components/ExperienceList"
import Link from 'next/link'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ItemCard from '../components/ItemCard'
import useItems from '../context/ItemContext'
import useUser from '../context/UserContext'

export default function Home() {
  const { items: exps, setItems } = useItems()
  const { user, setUser } = useUser()
  function addToCart(item){
      setUser({...user, cart: [...user.cart, item]})
    }
  return (
    <PageWrapper>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header>

        <Link href="/cart" >
          <CartIcon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p>{user.cart.length}</p>
          </CartIcon>
        </Link>
        </Header>
      <Main>
        <h2>Let's take an adventure! </h2>
        <Gallery>
          {
          exps.map((exp, i) => (
            <ItemCard
              key={exp.name}
              item={exp}
              addToCart={addToCart}
            />
          ))
          }
        </Gallery>
      </Main>
      <Footer />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Main = styled.main`
  padding: 20px 10%;
  flex: 1;
  h2 {
    margin: 0;
    padding-bottom: 10px;
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 40px;
`

const CartIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    height: 32px;
  }
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
`
