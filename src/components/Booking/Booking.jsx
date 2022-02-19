import React from "react";
import "./Booking.css";

function Booking() {
  return (
    <>
      <div id="reservation" className="reservations-main">
        <div className="container">
          <div className="form-reservations-box">
            <div
              className="wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <h2 className="block-title">Reservations</h2>
            </div>
            <h4 className="form-title">BOOKING FORM</h4>
            <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>

            <form
              id="contact-form"
              method="post"
              className="reservations-box"
              name="contactform"
              action="mail.php"
            >
              <div className="flex">
                <div className="form-box">
                  <input
                    type="text"
                    name="form_name"
                    id="form_name"
                    placeholder="Name"
                    required="required"
                    data-error="Firstname is required."
                  />
                </div>

                {/* <!-- end col --> */}

                <div className="form-box">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-Mail ID"
                    required="required"
                    data-error="E-mail id is required."
                  />
                </div>
              </div>
              {/* <!-- end col --> */}
              <div className="flex">
                <div className="form-box">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="contact no."
                  />
                </div>

                {/* <!-- end col --> */}

                <div className="form-box form-box-select">
                  <select
                    name="no_of_persons"
                    id="no_of_persons"
                    className="selectpicker"
                  >
                    <option selected disabled>
                      No. Of persons
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              {/* <!-- end col --> */}
              <div className="flex">
                <div className="form-box">
                  <input
                    min={new Date().toISOString().split("T")[0]}
                    type="date"
                    name="date-picker"
                    id="date-picker"
                    placeholder="Date"
                    required="required"
                    data-error="Date is required."
                  />
                </div>

                {/* <!-- end col --> */}

                <div className="form-box">
                  <input
                    type="time"
                    name="time-picker"
                    id="time-picker"
                    placeholder="Time"
                    required="required"
                    data-error="Time is required."
                  />
                </div>
              </div>
              {/* <!-- end col --> */}
              <div className="flex">
                <div className="form-box form-box-select">
                  <select
                    name="preferred_food"
                    id="preferred_food"
                    className="selectpicker"
                  >
                    <option selected disabled>
                      preferred food
                    </option>
                    <option>Indian</option>
                    <option>Continental</option>
                    <option>Mexican</option>
                  </select>
                </div>
                {/* <!-- end col --> */}

                <div className="form-box form-box-select">
                  <select
                    name="occasion"
                    id="occasion"
                    className="selectpicker"
                  >
                    <option selected disabled>
                      Occasion
                    </option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </select>
                </div>
              </div>
              {/* <!-- end col --> */}
              <div className="reserve-book-btn">
                <button
                  className="hvr-underline-from-center"
                  type="submit"
                  value="SEND"
                  id="submit"
                >
                  BOOK MY TABLE
                </button>
              </div>
              {/* <!-- end col --> */}
            </form>
            {/* <!-- end form --> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end reservations-main -->; */}
    </>
  );
}

export default Booking;
