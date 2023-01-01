import axios from "axios";
import React, { useCallback, useState } from "react";
import Swal from "sweetalert2";
import "../Home/FooterUp.css";

function MessageBox() {
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
          source: "Website Contact Page",
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
  return (
    <div className="container" id="contact-form">
      <div className="message-box">
        <p className="heading">Leave a Comment</p>
        <form onSubmit={submissionHandle}>
          <div className="row input-fields-container">
            <div className="col-md-4 input-fields-box">
              <input id="name" name="name" type="text" className="input-fields name" placeholder="Your Name" />
            </div>
            <div className="col-md-4 input-fields-box">
              <input id="email" name="email" type="email" className="input-fields email" placeholder="Your Email Address" />
            </div>
            <div className="col-md-4 input-fields-box">
              <input id="number" name="number" type="number" className="input-fields number" placeholder="Mobile Number" />
            </div>
            <div className="col-md-12 message-field">
              <textarea id="message" name="message" className="input-fields message"  rows="10" style={{ width: "100%" }} placeholder="Your Message ...."></textarea>
            </div>
          </div>
          <button className="send-message-button">
            {!response && !isLoading && !error && <span>Send Message</span>}
            {isLoading && (
              <div className="spinner-border text-white" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {!isLoading && response && !error && (
              <>
                <div className="wrapper">
                  <span>Submitted &nbsp;</span>
                  {"   "}
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
