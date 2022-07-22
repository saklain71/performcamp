import React from 'react';
import Companies from './Companies/Companies';
import FeaturesCard from './FeaturesCard/FeaturesCard';
import FirstBanner from './FirstBanner/FirstBanner';

import SecondBanner from './SecondBanner/SecondBanner';
import SetGoals from './SetGoals/SetGoals';
import ThirdBanner from './ThirdBanner/ThirdBanner';

const Home = () => {
    return (
        <div>
            
            <FirstBanner></FirstBanner>
            <Companies></Companies>
            <SecondBanner></SecondBanner>
            <ThirdBanner></ThirdBanner>
            <SetGoals></SetGoals>
            <FeaturesCard></FeaturesCard>
        </div>
    );
};

export default Home;