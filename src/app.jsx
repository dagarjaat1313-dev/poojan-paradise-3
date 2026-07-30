import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <>
      <Navbar />
      <Shop />
      <Footer />
      <WhatsAppButton />
    </>
  );
}