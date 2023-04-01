import {NextPage} from "next";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Assets from "@/components/Assets";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App:NextPage = () => {
    return (
        <>
          <Header/>
            <Home/>
            <main>
                <Services/>
                <Assets/>
                <Contact/>
            </main>
          <Footer/>

        </>
    )
}

export default App;
