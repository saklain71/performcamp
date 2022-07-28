import React from 'react';
import Companies from './Companies/Companies';
import FeaturesCard from './FeaturesCard/FeaturesCard';
import FirstBanner from './FirstBanner/FirstBanner';
import FourthBanner from './FourthBanner/FourthBanner';

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
            <FourthBanner></FourthBanner>
        </div>
    );
};

export default Home;