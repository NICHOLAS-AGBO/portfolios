import {Metadata, NextPage} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'About - Portfolio UI',
  description: 'Knowing what Portfolio UI is all about',
}

const App:NextPage = () => {
    return (
        <>
          <Header/>
          <div>Hello</div>
          <Footer/>

        </>
    )
}

export default App;
