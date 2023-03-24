import {NextPage} from "next";
import Home from "@/components/Home";
import Services from "@/components/Services";

const App:NextPage = () => {
    return (
        <>
            <Home/>
            <main>
                <Services/>
            </main>
        </>
    )
}

export default App;
