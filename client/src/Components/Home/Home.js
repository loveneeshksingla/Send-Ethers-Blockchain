import "./Home.scss"
import HomeLeft from "./Home_Left";
import HomeRight from "./Home_Right";



const Home = () => {
    return(
        <div className = "home_main">
           <HomeLeft/>
           <HomeRight/>
        </div>
    )
}

export default Home;