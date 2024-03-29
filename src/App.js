import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ToggleButton.css";
import TopInfo from "./Components/TopInfo";
import Footer from "./Components/Footer";
import ContentLoader from "react-content-loader";
// import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import Contact from "./Components/Contact/Contact";
// import Products from "./Components/Products/Products";
import ScrollToTop from "./ScrollToTop";

function App() {
  const Home = lazy(() => import("./Components/Home/Home"));
  const About = lazy(() => import("./Components/About/About"));
  const Contact = lazy(() => import("./Components/Contact/Contact"));
  const Products = lazy(() => import("./Components/Products/Products"));
  useEffect(() => {
    window.addEventListener("load", () => {
      Aos.init({
        duration: 600,
      });
      Aos.refresh();
    });
  }, []);
  return (
    <div className="container-fluid m-0 p-0">
      <Router>
        <TopInfo />
        <ScrollToTop>
          <Suspense
            fallback={
              <ContentLoader viewBox="0 -200 800 880" height={680} width={1500} backgroundColor="transparent">
                <path className="cls-1" d="M682.25,107.06c.2,31.21-.18,62.41-.51,93.62a167.23,167.23,0,0,0,2.19,29.47c1.2,6.72,5,15.84,13.53,13.08,4-1.3,8.4-4.17,12.51-1.53,1.73,1.63,3.51,3.31,6,3.49,10.23,2.47,10.69-7,19.61-3.75,3.78,1.33,8,3.94,12,1.72,7.7-8.75,7.55-22.28,8.13-33.4-.49-29.49.84-103-.44-131.37C752.81,53,727.86,46.3,731.4,24.88h1.25v-1.8H731.4v-3.7h1.25v-1.8H731.4v-.7h1.25v-1.8H731.4v-.77h1.09c.61-.29.35-1.42.33-2C732.74,7.91,733.94.44,727.69.08c-1.18-.1-16.94-.12-18.3,0-2.17.24-3.53,2.2-4,4.22-.53,3.21-.15,6.62-.17,9.88.34.63,1.33,0,1.18.87h-.09l-.1.1h-1a9.25,9.25,0,0,0-.07,1.69s1.21,0,1.25,0v.7h-1.25v1.8h1.25v3.7h-1.25v1.8h1.25a13.29,13.29,0,0,1,.05,2.12c1.62,9.38-3.87,16.61-10,23-5,6.14-9.56,12.87-12.11,20.46-2.11,6.5-2.28,13.47-2.21,20.24Q682.2,98.88,682.25,107.06Z" />
                <path className="cls-1" d="M568.45,124.18c6.33,28.35,12.14,56.81,18,85.27a156.59,156.59,0,0,0,7.8,26.38c2.42,5.88,7.68,13.42,14.89,9.23,3.39-2,6.82-5.45,11.08-3.86,1.9,1.14,3.85,2.32,6.19,2,9.79.24,8.34-8.45,17.1-7.27,3.7.46,8.08,2,11.25-.81,5.28-9.47,2.48-21.75.82-32C649.3,176.39,636,109.26,629.26,83.69,622,61.12,598,59.91,597,39.72l1.13-.24-.35-1.64-1.14.24-.73-3.36,1.14-.25-.36-1.64-1.13.25-.14-.64,1.14-.24-.36-1.64-1.14.25-.15-.7,1-.22c.5-.38,0-1.35-.09-1.87-.94-4-1.32-11-7.08-10.13-1.09.14-15.43,3.23-16.64,3.64-1.93.64-2.78,2.69-2.81,4.63.15,3,1.17,6.05,1.8,9,.42.5,1.2-.29,1.24.56h-.08l-.07.11-.9.2a7.42,7.42,0,0,0,.27,1.55s1.09-.24,1.14-.24l.13.64-1.13.25.35,1.63,1.14-.24.73,3.36-1.14.25.36,1.64,1.13-.25a12.29,12.29,0,0,1,.46,1.92c3.33,8.22-.24,15.87-4.58,22.89-3.38,6.58-6.16,13.59-7,21-.64,6.33.58,12.71,2,18.85Q566.79,116.75,568.45,124.18Z" />
                <path className="cls-1" d="M477.12,138.4c8.53,25.1,16.58,50.35,24.68,75.6a142.72,142.72,0,0,0,9.66,23.17c2.77,5.1,8.29,11.43,14.41,6.92,2.89-2.13,5.66-5.61,9.68-4.59,1.83.85,3.72,1.73,5.81,1.19,8.9-.75,6.74-8.48,14.8-8.28,3.4.07,7.52,1,10.13-1.83,3.86-9.11.11-20-2.4-29.1C555.6,177.85,537,118.25,528.33,95.71,519.52,76,497.6,77.2,494.72,59l1-.33-.48-1.45-1,.33-1-3,1-.33-.48-1.45-1,.33-.19-.56,1-.34-.48-1.45-1,.34-.21-.63.88-.29c.41-.39-.1-1.23-.26-1.68-1.25-3.54-2.28-9.88-7.42-8.5-1,.24-13.69,4.44-14.74,4.93-1.69.77-2.26,2.72-2.1,4.47.44,2.74,1.66,5.38,2.51,8,.44.42,1.07-.38,1.19.39l-.07,0-.06.11-.8.26a7.62,7.62,0,0,0,.4,1.38s1-.32,1-.32l.19.56-1,.34.48,1.45,1-.34,1,3-1,.34.49,1.45,1-.34a11.21,11.21,0,0,1,.61,1.7c3.82,7.13,1.34,14.42-1.91,21.22-2.43,6.3-4.26,12.93-4.28,19.73,0,5.81,1.77,11.47,3.65,16.91Q474.88,131.82,477.12,138.4Z" />
                <path className="cls-1" d="M387.23,156.84c11.81,21,23.23,42.22,34.68,63.42a129.24,129.24,0,0,0,12.51,19.08c3.32,4.09,9.3,8.83,14,3.78,2.22-2.38,4.11-6,7.87-5.72,1.78.45,3.61.92,5.39.1,7.83-2.16,4.61-8.71,11.84-9.87,3.05-.52,6.9-.35,8.75-3.33,1.93-8.79-3.24-17.87-7-25.6-11.36-19.73-38-69.86-49.44-88.56C414.68,94,395.3,98.74,389.68,83l.84-.47-.67-1.22-.85.47-1.38-2.5.84-.47-.67-1.21L387,78l-.26-.48.84-.47-.67-1.21-.85.47-.29-.52.74-.41c.3-.42-.29-1.09-.52-1.46-1.7-3-3.69-8.45-8-6.35-.84.37-11.49,6.25-12.35,6.86a3.9,3.9,0,0,0-1.13,4.35A50.5,50.5,0,0,0,368,85.53c.47.3.89-.51,1.13.15l-.06,0,0,.11-.67.37a7.47,7.47,0,0,0,.58,1.17s.82-.46.85-.46l.26.47-.84.47.67,1.21.85-.47,1.38,2.5-.84.47.67,1.22.84-.47a10.93,10.93,0,0,1,.83,1.41c4.6,5.74,3.6,12.67,1.83,19.28-1.11,6-1.64,12.27-.52,18.35,1,5.18,3.5,9.95,6.08,14.49C383.09,149.5,385.17,153.16,387.23,156.84Z" />
                <path className="cls-1" d="M311.7,171.75c12.46,17.75,24.58,35.73,36.73,53.68a116.52,116.52,0,0,0,12.91,16c3.34,3.37,9.12,7.07,12.9,2.13,1.77-2.33,3.15-5.71,6.54-5.83,1.63.25,3.31.51,4.83-.39,6.82-2.64,3.35-8.21,9.72-9.9,2.69-.73,6.14-.93,7.53-3.76.94-8.05-4.5-15.72-8.56-22.3-11.94-16.64-40.25-59.15-52.2-74.86C330.65,113,313.73,119,307.28,105.38l.71-.5-.71-1-.71.49-1.46-2.11.71-.5-.71-1-.72.49-.27-.4.71-.49-.71-1-.72.49-.3-.44.62-.43c.24-.4-.36-.94-.59-1.26-1.79-2.49-4.06-7.23-7.77-5-.72.41-9.73,6.63-10.45,7.25a3.52,3.52,0,0,0-.61,4,43,43,0,0,0,3.81,5.71c.44.22.75-.54,1,0l-.05,0v.1l-.57.39c-.07,0,.61,1,.63,1s.69-.47.72-.48l.27.4-.71.49.71,1,.72-.5,1.46,2.12-.72.49.72,1,.71-.49a8.91,8.91,0,0,1,.86,1.19c4.64,4.72,4.37,11,3.37,17.09A45.75,45.75,0,0,0,298.41,150c1.36,4.55,4,8.59,6.74,12.43Q308.43,167.11,311.7,171.75Z" />
                <path className="cls-1" d="M233.36,194.67c14.52,12.86,28.79,26,43.09,39.09A105.45,105.45,0,0,0,291,245c3.61,2.23,9.41,4.25,11.67-.83,1.06-2.4,1.55-5.62,4.48-6.43,1.47-.12,3-.25,4.12-1.34,5.39-3.71,1.21-7.84,6.4-10.63,2.19-1.2,5.16-2.08,5.78-4.84-.85-7.19-7.17-12.74-12.07-17.62-13.85-12-47.29-43.12-61-54.31-12.77-9.37-26.24-.62-34.68-11.15l.52-.58-.83-.74-.52.57-1.71-1.53.52-.58-.84-.75-.52.58-.32-.29.52-.58-.83-.74-.52.57-.36-.32.45-.5c.12-.4-.51-.75-.77-1-2.08-1.8-5-5.45-7.8-2.71-.53.5-7.08,7.78-7.58,8.47a3.13,3.13,0,0,0,.29,3.6,38.74,38.74,0,0,0,4.5,4.18c.43.11.54-.62.89-.18l0,0v.09l-.41.46s.73.7.75.73.5-.56.53-.58l.32.3-.52.57.83.75.52-.58,1.71,1.54-.51.58.83.74.52-.58a9.39,9.39,0,0,1,1,.86c5,3.15,6.08,8.68,6.47,14.18a41.05,41.05,0,0,0,4.44,14.09c2.13,3.68,5.29,6.64,8.45,9.42Z" />
                <path className="cls-1" d="M151.63,214.28c15.15,8.22,30.13,16.72,45.14,25.2a92.84,92.84,0,0,0,14.83,6.8c3.58,1.21,9,1.8,9.94-3.06.44-2.28.22-5.17,2.59-6.46a5.55,5.55,0,0,0,3.3-2c3.92-4.29-.52-7,3.41-10.48,1.66-1.48,4-2.83,4-5.35-2.17-6.05-8.76-9.59-14-12.83-14.39-7.63-49.58-27.86-63.65-34.81-12.93-5.55-22.84,4.72-32.25-2.7l.33-.6-.87-.48-.33.6-1.79-1,.33-.6-.87-.48-.33.6-.34-.18.33-.61-.87-.48-.33.61-.38-.21.3-.52c0-.37-.6-.55-.87-.69-2.16-1.14-5.45-3.71-7.29-.79-.37.55-4.58,8.16-4.87,8.86a2.79,2.79,0,0,0,1,3.06,35.25,35.25,0,0,0,4.74,2.72c.39,0,.34-.65.73-.34l0,0,0,.08-.26.48s.77.46.8.48.32-.58.33-.6l.34.18-.33.61.87.48.33-.61,1.79,1-.33.61.87.47.33-.6a8.65,8.65,0,0,1,1,.54c5,1.72,7,6.3,8.45,11a36.21,36.21,0,0,0,6.67,11.31,34.71,34.71,0,0,0,9.2,6.46Z" />
                <path className="cls-1" d="M51.27,245.3c14.95-.09,29.89.09,44.84.25a80.46,80.46,0,0,0,14.12-1.05c3.22-.58,7.58-2.4,6.26-6.48-.62-1.92-2-4-.73-6a4.86,4.86,0,0,0,1.67-2.9c1.18-4.9-3.34-5.11-1.8-9.39.64-1.81,1.89-3.84.83-5.75-4.19-3.68-10.68-3.61-16-3.89-14.12.24-49.32-.4-62.92.21-12.14,1.2-15.37,13.15-25.63,11.45v-.6h-.86v.6H9.28v-.6H8.42v.6H8.08v-.6H7.22v.6H6.85v-.52c-.14-.29-.67-.17-.95-.16-2.11,0-5.69-.53-5.86,2.46,0,.56-.06,8.11,0,8.76a2.44,2.44,0,0,0,2,1.92,29.85,29.85,0,0,0,4.73.08c.31-.16,0-.64.42-.56v0l0,.05v.47a5.3,5.3,0,0,0,.81,0s0-.58,0-.6h.34v.6h.86v-.6h1.77v.6h.86v-.6a6.75,6.75,0,0,1,1,0c4.5-.77,8,1.85,11,4.8a31.38,31.38,0,0,0,9.8,5.8,30.42,30.42,0,0,0,9.69,1.06Z" />
                <path className="cls-1" d="M107.15,301.87h0Z" />
              </ContentLoader>
            }
          >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
            </Switch>
          </Suspense>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
