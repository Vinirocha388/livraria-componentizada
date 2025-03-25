import Categorias from "./components/Categorias";
import FeaturedBook from "./components/FeaturedBook";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Newsletter from "./components/newsletter";
import styles from "./page.module.css";


export default function Home() {

  return (
    <div className={styles.bookstoreContainer}>
      <Header />
      <HeroBanner />
      <FeaturedBook />
      <Categorias />
      <Newsletter />
      <Footer />
    </div>
  );

}
