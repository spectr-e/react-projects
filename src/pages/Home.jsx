import { Title } from '../components'

const Home = ({ page }) => {
  return (
    <>
      <Title title={page} classes={'title text-center text-primary'} />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, vero!
        Officiis pariatur quo labore fugiat quos temporibus, tempora maxime
        nihil quisquam velit iste animi repellat fugit quam magnam explicabo
        porro.
      </p>
    </>
  )
}

export default Home
