import Assets from "@/components/Assets";
import Contact from "@/components/Contact";
import CoverPage from "@/components/CoverPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Extras from "@/components/Extras";

const Home = ()=>{
    return(
        <>
            <Header/>
            <CoverPage/>
            <main>
                <Assets/>
                <Contact/>
                <Extras/>
            </main>
            <Footer/>
        </>
    );
}


export default Home;