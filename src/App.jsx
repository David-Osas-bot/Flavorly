import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Picks from "./components/picks/Picks";
import PicksTwo from "./components/picksTwo/picksTwo";
import Delivery from "./components/delivery/Delivery";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Chin from "./components/chin/Chin";
import Decors from "./components/decors/Decors";

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Menu />
            <Picks />
            <PicksTwo/>
            <Chin/>
            <Decors/>
            <Delivery />
            <About />
            <Contact />
            <Footer />
        </>
    );
};

export default App;