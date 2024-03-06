import './Navbar.scss';


const Navbar = () => {

    return(
        <div className = "navbar_main" >
            <div className = "navbar">
                <div className = "navbar_left">
                    <div className= "navbar_left_logo">
                        bitBank
                    </div>
                </div>
                <div className="navbar_right">
                    <div className = "navbar_right_menu">
                        <ul>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Navbar;