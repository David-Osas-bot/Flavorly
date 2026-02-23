import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Picks from "./components/picks/Picks";
import Delivery from "./components/delivery/Delivery";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Menu />
            <Picks />
            <Delivery />
            <About />
            <Contact />
            <Footer />
        </>
    );
};

export default App;