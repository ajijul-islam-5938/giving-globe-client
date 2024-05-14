import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner/Banner';
import VolunteerNeedNow from '../VolunteerNeedNow/VolunteerNeedNow';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <Banner/>
            <VolunteerNeedNow/>
        </div>
    );
};

export default Home;