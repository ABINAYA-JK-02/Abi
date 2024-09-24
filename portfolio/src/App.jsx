// import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

const App = () => {
    const appname = "Abi";

    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-start items-center">
                <Navbar appname={appname} />
            </div>

        </>
    )
}

export default App;