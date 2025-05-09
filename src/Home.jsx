import React from 'react';
import Extra from './Extra';
import Circulers from './Circulers';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Circulers></Circulers>
            <Extra></Extra>
        </div>
    );
};

export default Home;