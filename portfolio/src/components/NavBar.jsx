const Navbar = ({ Appname }) => {

    console.log(appname)
    return (
        <div className="w-full h-[3vh] grad-blue-bg text-white flex justify-center items-center gap-4">
            {appname}
        </div>
    )
}

export default Navbar;