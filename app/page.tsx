import {NextPage} from "next";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Assets from "@/components/Assets";

const App:NextPage = () => {
    return (
        <>
            <Home/>
            <main>
                <Services/>
                <Assets/>
            </main>
        </>
    )
}

export default App;
