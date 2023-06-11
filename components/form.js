"use client";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [flightType, setFlightType] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleOptionChange = (event) => {
    setFlightType(event.target.value);
  };
  const [passengerType, setPassengerType] = useState("");

  const handleTypeChange = (event) => {
    setPassengerType(event.target.value);
  };

  const handleSubmission = async () => {
    const query = await axios.post("http://localhost:8080/booking", {
      email,
      phoneNumber,
      countryCode: "IN",
      homeLocation: inputValues.input1,
      destination: inputValues.input2,
      flightType,
      departureDate: inputValues.input3,
      passCount: inputValues.input5,
      currency: inputValues.input6,
    });
    console.log("Data Has been posted succesfully");
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="oneway"
            checked={flightType === "option1"}
            onChange={handleOptionChange}
          />
          One Way
        </label>

        <label>
          <input
            type="radio"
            value="roundtrip"
            checked={flightType === "option2"}
            onChange={handleOptionChange}
          />
          Round Trip
        </label>

        <label>
          <input
            type="radio"
            value="multicity"
            checked={flightType === "option3"}
            onChange={handleOptionChange}
          />
          Multi City
        </label>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <input
          className="border border-black"
          type="text"
          name="input1"
          placeholder="From"
          value={inputValues.input1}
          onChange={handleInputChange}
        />

        <input
          className="border border-black"
          type="text"
          name="input2"
          placeholder="To"
          value={inputValues.input2}
          onChange={handleInputChange}
        />

        <input
          className="border border-black"
          type="date"
          name="input3"
          placeholder="Departure Date"
          value={inputValues.input3}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="border border-black"
          name="input4"
          placeholder="Add Return Trip"
          value={inputValues.input4}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="border border-black"
          name="input5"
          placeholder="Passenger & Extra Seats"
          value={inputValues.input5}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="border border-black"
          name="input6"
          placeholder="Pay in (currency)"
          value={inputValues.input6}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="adult"
            checked={passengerType === "adult"}
            onChange={handleTypeChange}
          />
          Armed Forces
        </label>

        <label>
          <input
            type="radio"
            value="child"
            checked={passengerType === "child"}
            onChange={handleTypeChange}
          />
          Vaccinated
        </label>

        <label>
          <input
            type="radio"
            value="senior"
            checked={passengerType === "senior"}
            onChange={handleTypeChange}
          />
          Family & Friends
        </label>

        <label>
          <input
            type="radio"
            value="student"
            checked={passengerType === "student"}
            onChange={handleTypeChange}
          />
          Student
        </label>

        <label>
          <input
            type="radio"
            value="disabled"
            checked={passengerType === "disabled"}
            onChange={handleTypeChange}
          />
          Doctors and Nurses
        </label>
        <label>
          <input
            type="radio"
            value="minor"
            checked={passengerType === "minor"}
            onChange={handleTypeChange}
          />
          Unaccompanied Minor
        </label>
      </div>

      <div
        onClick={handleSubmission}
        className="border border-green-500 bg-green-500 text-white cursor-pointer"
      >
        <p>Book Flight</p>
      </div>

      <div>
        <p>Contact Details</p>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
