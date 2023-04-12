import Assets from "@/components/Assets";
import Contact from "@/components/Contact";
import CoverPage from "@/components/CoverPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = ()=>{
    return(
        <>
            <Header/>
            <CoverPage/>
            <main>
                <Assets/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
}


export default Home;