import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";
import postsData from "./Home.json";
import PostList from "./PostList";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import data from "./data.json";

// Functional components
const HomeScreen = () => <h1>Home</h1>;
const ProfileScreen = () => <h1>Profile</h1>;
const ShopScreen = () => {
  throw new Error("Error thrown in ShopScreen component.");
};

function App() {

  const fetchData = async () => {
    try {
      const response = await fetch("https://webhook.site/e3443285-9e83-433d-8c63-84b699755c40", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          // Enable CORS
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          key1: 'myusername',
          email: 'mymail@gmail.com',
          name: 'Isaac',
          lastname: 'Doe',
          age: 27
        })
      });
      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  return (
    <>




    
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile" activeClassName="active">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop" activeClassName="active">
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
          <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
          <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
        </Routes>
      </BrowserRouter>



      <div className="container">
        <h1 className="my-4">Posts</h1>
        <PostList posts={postsData} />
      </div>





      <div className="container">
      <Example1 socialMedias={data.SocialMedias} />
      <Example2 skills={data.Skills} />
      <Example3 experiences={data.Experiences} />
    </div>

    <div className="container">
      <button className="btn btn-primary mt-3" onClick={fetchData}>
        Fetch Data
      </button>
    </div>

    </>
  );
}




export default App;
