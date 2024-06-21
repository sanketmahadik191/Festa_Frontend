
import { Link} from "react-router-dom"
import CategoriesHotel from "../components/mainPage/CategoriesHotel.jsx";
import Collections from "../components/mainPage/Collections.jsx";
import ExploreOptionsNearMe from "../components/mainPage/Explore.jsx"
import Front from "../components/mainPage/Front.jsx";
import Footer from "../components/mainPage/Footer.jsx";

const Main = () => {
  return (
    <>
     <Front />
     <CategoriesHotel />
     <Collections />
     <ExploreOptionsNearMe />\
     <Footer />
    </>
  );
};

export default Main;
