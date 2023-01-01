import React, { useCallback, useState } from "react";
import "./FooterUp.css";
import Swal from "sweetalert2";
import axios from "axios";

function FooterUp() {
  const [response, setResponse] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submissionHandle = useCallback(async (event) => {
    event.preventDefault();
    const ourRequest = axios.CancelToken.source();    

    var name = event.target.name.value;
    var email = event.target.email.value;
    var number = event.target.number.value;
    var message = event.target.message.value;
    if (validateUser(name, email, number, message)) {
      if (checkMobile(number) === false) {
        return;
      }
      if (checkEmail(email) === false) {
        return;
      }
      setIsLoading(true);
      
      axios(process.env.REACT_APP_API_URL + "/home_contact_form", {
        method: "POST",
        cancelToken: ourRequest.token,
        data: {
          name: name,
          number: number,
          email: email,
          message: message,
          source: "Website Home Page"
        },
      })
        .then(async (res1) => {
          // console.log(res1);
          const res = await res1.data;
          if (res.status === "success") {
            setResponse(true);
            // console.log(res);
            clearData();
            setTimeout(() => {
              setResponse(false);
            }, 4000);
          } else {
            setError(true);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          // console.log(error);
        });
    }

    function clearData() {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("number").value = "";
      document.getElementById("message").value = "";
    }

    function validateUser(name, email, number, message) {
      if (name === "" || email === "" || number === "" || message === "") {
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

    function checkMobile(mobile) {
      //    console.log();
      //    console.log(mobile.isNumeric());
      if (!/^\d+$/.test(mobile) || mobile.length !== 10 || !(mobile.charAt(0) === "9" || mobile.charAt(0) === "8" || mobile.charAt(0) === "7" || mobile.charAt(0) === "6")) {
        Swal.fire({
          title: "Error!",
          text: "Invalid Mobile number!!",
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

  // if (!isLoading) {
  //   console.log("token : " + response);
  // }

  return (
    <div className="row footer-up">
      <div className="col-md-6 content-box">
        <p className="title">Buiding blocks for Digital</p>
        <p className="heading" data-aos="fade-right">
          Work With Tried and True Mineral Water
        </p>
        <p className="content" data-aos="fade-right">
          Mineral water and all the other flavoured waters benefits the internal body,can be done by the natural ingredients that we provide, because we care for your health first
        </p>
      </div>
      <div className="col-md-6 contact-form" id="contact-form">
        <form className="row form" onSubmit={submissionHandle}>
          <div className="col-md-5 box1">
            <div>
              <i className="fas fa-phone"></i>
              <input id="number" name="number" type="tel" placeholder="Phone Number" />
            </div>
            <div>
              <i className="fas fa-user"></i>
              <input id="name" name="name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <input id="email" name="email" type="email" placeholder="Your Email Address" />
            </div>
            <button id="footerup-query-button" type="submit" className="query-button">
              {!response && !isLoading && !error && <p>Send Your Query</p>}
              {isLoading && (
                <div className="spinner-border text-white" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              {!isLoading && response && !error && (
                <>
                  <div className="wrapper">
                    <p>Submitted &nbsp;</p>
                    {"   "}
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                      <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                  </div>
                </>
              )}
            </button>
          </div>
          <div className="col-md-7 box2">
            <textarea id="message" name="message" placeholder="Your Message ....." max="200"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FooterUp;
