import React from 'react';
import Headline from '../Headline';
import Reference from '../Reference';
import MainText from '../MainText';
import Contactform from '../ContactForm';
import Footer from '../Footer';

const Homepage = (props) => {
    return (
        <div className="top-margin">
            <Headline></Headline>
            <div className="gradient"></div>
            <div className="container">
                <div className="d-flex row justify-content-center mt-5 pt-4">
                    <Reference></Reference>
                    <MainText></MainText>
                </div>
                <div className="d-flex row justify-content-center mt-5 pt-5 mb-5 pb-4">
                <Contactform></Contactform>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Homepage