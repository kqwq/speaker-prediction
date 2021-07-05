import React, { Fragment } from 'react';
import Footer from './components/Footer'
import SocialMediaLinks from './components/SocialMediaLinks';


export default function App()
{
    let siteName = "..Grace Life CC Prediction"
    return <>
    <h1>Welcome to {siteName}</h1>
        
    <Footer>
        <span>Made by Kyle</span>
        
        
        <SocialMediaLinks/>
        <span></span>

    </Footer> 
        
    
    </> 


}