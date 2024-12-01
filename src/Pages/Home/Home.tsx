import CreationSection from "../../Components/CreationSection/CreationSection";
import Item from "../../Components/Item/Item";
import { HomeBody, ItemsContainer } from "./Home.styles";

const Home = () => {
    return(
        <HomeBody>
            <CreationSection />

            <ItemsContainer>
                <Item title="" description=""/>
            </ItemsContainer>
        </HomeBody>
    )
}

export default Home;