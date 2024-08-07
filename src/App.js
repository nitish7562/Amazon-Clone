import React from 'react';
import './style.css';

function App() {
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo"></div>
          </div>
          <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <i className="fas fa-location-dot"></i>
              <p className="add-second">India</p>
            </div>
          </div>
          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
              <option>All categories</option>
              <option>Alexa Skills</option>
              <option>Amazon Devices</option>
              <option>Amazon Fashion</option>
              <option>Amazon Fresh</option>
              <option>Amazon Pharmacy</option>
              <option>Baby</option>
              <option>Beauty</option>
              <option>Books</option>
              <option>Cars & Motorbike</option>
              <option>Furniture</option>
              <option>Electronics</option>
            </select>
            <input placeholder="Search Amazon" className="search-input" />
            <div className="search-icon">
              <i className="fas fa-search"></i>
            </div>
          </div>
          <div className="nav-signin border">
            <p><span>Hello, sign in</span></p>
            <p className="nav-second">Account & Lists</p>
          </div>
          <div className="nav-return border">
            <p><span>Returns</span></p>
            <p className="nav-second">& Orders</p>
          </div>
          <div className="nav-cart border">
            <i className="fas fa-shopping-cart"></i>
            Cart
          </div>
        </div>
        <div className="panel">
          <div className="panel-all">
            <i className="fas fa-bars"></i>
            All
          </div>
          <div className="panel-ops">
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
          </div>
          <div className="panel-deals">
            Shop deals in Electronics
          </div>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-msg">
          <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="https://www.amazon.in/">Click here to go to amazon.in</a></p>
        </div>
      </div>

      <div className="shop-section">
        <div className="box1 box">
          <div className="box-content">
            <h2>Bluetooth Calling Smartwatch starts at ₹1,999</h2>
            <div className="box-img" style={{ backgroundImage: "url('/smart-watch.jpg')" }}></div>
            <p>Shop Now</p>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2>Starting ₹99 | Start your fitness journey</h2>
            <div className="box-img" style={{ backgroundImage: "url('/fitness-jouney.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <h2>Clothes</h2>
            <div className="box-img" style={{ backgroundImage: "url('/box1_image.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <h2>Health & Personal Care</h2>
            <div className="box-img" style={{ backgroundImage: "url('/box2_image.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box5 box">
          <div className="box-content">
            <h2>Furniture</h2>
            <div className="box-img" style={{ backgroundImage: "url('/box3_image.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box6 box">
          <div className="box-content">
            <h2>Electronics & gadgets</h2>
            <div className="box-img" style={{ backgroundImage: "url('/box4_image.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box7 box">
          <div className="box-content">
            <h2>Beauty picks</h2>
            <div className="box-img" style={{ backgroundImage: "url('/box5_image.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box8 box">
          <div className="box-content">
            <h2>Pet Care</h2>
            <div className="box-img" style={{ backgroundImage: "url('/box6_image.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box9 box">
          <div className="box-content">
            <h2>New arrivals in Toys</h2>
            <div className="box-img" style={{ backgroundImage: "url('/box7_image.jpg')" }}></div>
            <p>Shop now</p>
          </div>
        </div>
        <div className="box10 box">
          <div className="box-content">
            <h2>Discover fashion trends</h2>
            <div className="box-img" style={{ backgroundImage: "url('/box8_image.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box11 box">
          <div className="box-content">
            <h2>Hip Hop India | Watch Now Only on miniTV</h2>
            <div className="box-img hip-hop" style={{ backgroundImage: "url('/Hip-Hop India.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box12 box">
          <div className="box-content">
            <h2>Gardening essentials | Starting ₹99</h2>
            <div className="box-img" style={{ backgroundImage: "url('/Flower-garden.jpg')" }}></div>
            <p>See more</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="foot-panel1">
          <p>Back to Top</p>
        </div>
        <div className="foot-panel2">
          <ul>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a>
            <a>About Amazon</a>
            <a>Investor Relations</a>
            <a>Amazon Devices</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Make Money with Us</p>
            <a>Sell products on Amazon</a>
            <a>Sell on Amazon Business</a>
            <a>Sell apps on Amazon</a>
            <a>Become an Affiliate</a>
            <a>Advertise Your Products</a>
            <a>Self-Publish With Us</a>
            <a>Host an Amazon Hub</a>
            <a>Self-Publish with Us</a>
            <a>See More Make Money With Us..</a>
          </ul>
          <ul>
            <p>Amazon Payments Products</p>
            <a>Amazon Business Card</a>
            <a>Shop with points</a>
            <a>Reload Your Points</a>
            <a>Investor Relations</a>
            <a>Amazon Currency Converter</a>
          </ul>
          <ul>
            <p>Let Us Help You</p>
            <a>Amazon and COVID-19</a>
            <a>Your Account</a>
            <a>Your Orders</a>
            <a>Shipping Rates & Policies</a>
            <a>Returns & Replacements</a>
            <a>Amazon Assistant</a>
            <a>Help</a>
          </ul>
        </div>
        <div className="foot-panel3">
          <div className="logo"></div>
        </div>
        <div className="foot-panel4">
          <div className="pages">
            <a>Conditions of Use & Sale</a>
            <a>Privacy Notice</a>
            <a>Interest-Based Ads</a>
          </div>
          <div className="copyright">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
