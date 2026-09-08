import Navbar from '../navigationbar/navbar.tsx'
import Footer from '../navigationbar/footer.tsx'
import Social from '../navigationbar/social.tsx'
import HomeHero from './homeHero.tsx';
function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Social />
      <Footer />
    </>
  );
}

export default Home;
