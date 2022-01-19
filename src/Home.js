import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image"
             src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg" alt="amazon prime" />
                 <div className="home__rowone">
                     {/* Product */}
                     <Product title='The Learn Startup: How Constant Innovation Creates Radically
                    Successful Buisnesses Paperback' price={29.93} image='https://images-eu.ssl-images-amazon.com/images/I/51aEhyjQGrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' rating={4} id="1398483" />
                     {/* Product */}
                     <Product title='Airdopes 141 TWS Earbuds with 42H Playtime, BEAST™ Mode, ENx™ Tech, ASAP™ Charge, IWP™, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)' price={123.95} image="https://m.media-amazon.com/images/I/41ENFo8EsSL._SX425_.jpg" rating={5} id="9493992" />
                 </div>
                 <div className="home__row">
                     {/* Product */}
                     <Product id="403002" title='OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation (SpO2), Heart Rate and Sleep Tracking, 5ATM+Water and Dust Resistant( Android and iOS Compatible)' price={150.39} image='https://m.media-amazon.com/images/I/61XPTRJZcCL._SX425_.jpg' rating={4} />
                     {/* Product */}
                     <Product id="594030" image='https://images-eu.ssl-images-amazon.com/images/I/41jRzGyDUJL._SX300_SY300_QL70_FMwebp_.jpg' title='Redmi 9A (Nature Green, 3GB Ram, 32GB Storage) | 2GHz Octa-core Helio G25 Processor' price={153.11} rating={4} />
                     {/* Product */}
                     <Product id="939453" image='https://m.media-amazon.com/images/I/914o5xV1+8L._AC_SX410_SY308_.jpg' title="ASUS TUF Gaming F15, 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GTX 1650 Ti GDDR6 4GB Graphics, Gaming Laptop" price={625.34} rating={5} />
                 </div>
                 <div className="home__row home__rowtwo">
                     {/* Product */}
                     <Product id="992030" title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)' image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg" price={753.23} rating={5} />
                     {/* Product */}
                     <Product id="95934030" title='boAt Airdopes 121v2 Bluetooth Truly Wireless in Ear Earbuds with Mic (Active Black)' image="https://m.media-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg" price={32.23} rating={5} />
                 </div>
            </div>
        </div>
    )
}

export default Home
