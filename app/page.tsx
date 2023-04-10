import {NextPage} from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Home from "@/app/components/Home";

const App:NextPage = () => {
    return (
        <>
          <Header/>
            <Home/>
            <main>
                {/*<Services/>*/}
                {/*<Assets/>*/}
                {/*<Contact/>*/}
            </main>
          <Footer/>
        </>
    )
}

export default App;
