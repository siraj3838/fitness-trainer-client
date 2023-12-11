import { Helmet } from "react-helmet-async";
import ClassesBanner from "../../Shared/ClassesBanner";
import ClientShowReview from "../../Shared/ClientShowReview";
import ClientsForm from "../../Shared/ClientsForm";
import Exclusive from "../../Shared/Exclusive";
import HomeBanner from "../../Shared/HomeBanner";
import HomeCard from "../../Shared/HomeCard";
import Trainer from "../../Shared/Trainer";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>GYMSTER || Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <Exclusive></Exclusive>
            <HomeCard></HomeCard>
            <ClassesBanner></ClassesBanner>
            <Trainer></Trainer>
            <ClientShowReview></ClientShowReview>
            <ClientsForm></ClientsForm>
        </div>
    );
};

export default Home;