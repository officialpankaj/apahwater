import axios from "axios";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function AboutFooterUp(props) {
  const [response, setResponse] = useState(false);
  const [responseText, setResponseText] = useState("We are not spammers!");
  const [responseTextColor, setResponseTextColor] = useState("#838383");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const subscribeHandle = useCallback(async (event) => {
    event.preventDefault();
    const ourRequest = axios.CancelToken.source();

    var email = event.target.email.value;
    if (validateUser(email)) {
      if (checkEmail(email) === false) {
        return;
      }
      setIsLoading(true);

      axios(process.env.REACT_APP_API_URL + "/email_subscription", {
        method: "POST",
        cancelToken: ourRequest.token,
        data: {
          email: email,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (res1) => {
          console.log(res1.data);
          const res = await res1.data;
          if (res.status === "success") {
            setResponse(true);
            setResponseText(res.message);
            setResponseTextColor("#00dd00");
            setError(false);
            // console.log(res);
            clearData();
            setTimeout(() => {
              setResponse(false);
            }, 4000);
          } else if (res.status === "fail") {
            setResponse(true);
            setError(true);
            setResponseText(res.message);
            setResponseTextColor("#ff0000");
            setTimeout(() => {
              setResponse(false);
            }, 4000);
          } else {
            setError(true);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function validateUser(email) {
      if (email === "") {
        Swal.fire({
          title: "Error!",
          text: "All fields are Mandatory.",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return false;
      }
      return true;
    }

    function clearData() {
      document.getElementById("subscribe-email").value = "";
    }

    function checkEmail(email) {
      let attheratepos = email.indexOf("@");
      let dotpos = email.indexOf(".");
      if (attheratepos < 1 || dotpos < attheratepos + 2 || dotpos + 2 >= email.length) {
        Swal.fire({
          title: "Error!",
          text: "Please enter a valid email",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return false;
      }
      return true;
    }

    return () => {
      ourRequest.cancel();
    };
  }, []);

  return (
    <div style={{ background: props.containerBg }}>
      <div className="container">
        <div className="row about-footer-up">
          <div className="col-md-6 subscribe-form">
            <p className="heading">Subscribe to get notified!</p>
            <form onSubmit={subscribeHandle}>
              <input name="email" id="subscribe-email" style={{ background: props.emailBg }} className="email" type="text" placeholder="Enter your email" />
              <button className="subscribe-button" type="submit">
                {!response && !isLoading && <span>Subscribe</span>}
                {isLoading && (
                  <div className="spinner-border text-white" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                {!isLoading && response && !error && (
                  <div className="wrapper">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                      <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                  </div>
                )}
                {response && error && (
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                    <path fill="#3C4FED" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                  </svg>
                )}
              </button>
            </form>
            <p className="title" style={{ color: responseTextColor }}>
              {responseText}
            </p>
            <div className="social-box">
              <img className="social-icon" src="images/instagram.svg" alt="instagram" />
              <img className="social-icon" src="images/facebookround.svg" alt="facebook" />
              <img className="social-icon" src="images/google-plus.svg" alt="google-plus" />
              <img className="social-icon" src="images/twitter.svg" alt="twitter" />
              <div className="title"> - Stay in touch</div>
            </div>
          </div>
          <div className="col-md-6 row content-box">
            <p className="heading">Be the first to get the taste!</p>
            <p className="content">t is a long established fact that when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
            <div className="box-one">
              <Link to="/contact">Get in touch</Link>
            </div>
            <div className="box-two">
              <Link to="/products">Get more of us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFooterUp;
