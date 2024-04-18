// Home.js
import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useAxiosPost";
import { useSelector } from "react-redux";
import Logo from "../components/Logo";

function Home() {
  const token = useSelector((state) => state.token.accessToken);
  const isLoged = useSelector((state) => state.login.isLoggedIn);
  const user = useSelector((state) => JSON.parse(state.user.userInfo));
  let isAdmin = false;
  if (user) {
    isAdmin = user.role === "admin";
  }
  //console.log(token);
  const { handleLogout } = useLogout(token);
  return (
    <>
      <div className="container upper-container">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6  d-flex justify-content-end ">
            {isAdmin&& <Link class="button-85 mx-2 mt-4 suggestion-link text-white " to={'/dashboard'} role="button">Dashboard</Link>}
          
          {isLoged === "loged" ? (
              <button
                onClick={handleLogout}
                className="button-85  mt-4"
              >
                <i className="fa fa-sign-out me-1" /> Logout
              </button>
            ) : (
              <Link to="/login" className="button-85 mt-4 ml-4 mx-2 mt-4 text-white suggestion-link" >
                <i className="fa fa-sign-in me-1" /> Login
              </Link>
            )}  
          </div>
          <div className="col-3 d-flex justify-content-end">
         
          </div>
        </div>
      </div>
      <Hero />
      <div className="container custom-should bg-white">
        <div className="row">
          <div className="col-md-6 mb-2 mt-5">
            <hr className="line" />
            <h1 className="should-text">Why should you have a cat ?</h1>
            <p>
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              levels
            </p>
            <Link to={`/cat-breed`} className="suggestion-link">
              Read More <span>&rarr;</span>
            </Link>
          </div>
          <div className="col-md-6 mt-4 custom-images">
            <div className="row">
              <div className="col-md-3 custom-width">
                <div className="row sleeping">
                  <img src={`${process.env.PUBLIC_URL}/images/image 2.png`} className="image1" alt="Image 2" />
                </div>
                <div className="row human">
                  <img src={`${process.env.PUBLIC_URL}/images/image 1.png`} className="image2" alt="Image 1" />
                </div>
              </div>
              <div className="col-md-3 bag-cat">
                <img src={`${process.env.PUBLIC_URL}/images/image 3.png`} className="image3" alt="Image 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
