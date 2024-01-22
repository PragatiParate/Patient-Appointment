import React, { useReducer, useState } from "react";
import InputComponent from "../../module/InputComponent/InputComponent";
import styless from "./PatientComponent.module.scss";
import RadioCompo from "../../module/RadioComponent/RadioComponent";
import { text } from "stream/consumers";


export interface patientType {
  id : string;
  fullName: string;
  address: string;
  city: string;
  phone:number ;
  emailId: string;
  DOB: string;
  appoDate: string;
}

const initialState = {
  id :'000',
  fullName: "",
  address: "",
  city: "",
  phone: 0,
  emailId: "",
  DOB: "",
  appoDate:'',

};

const reducerFun = (state: patientType, action: any) => {
  switch (action.type) {
    case "setFullName":
      return { ...state, fullName: action.payload.fullName };

    case "setAddress":
      return { ...state, address: action.payload.address };

    case "setCity":
      return { ...state, city: action.payload.city };

    case "setPhone":
      return { ...state, phone: action.payload.phone };

    case "setEmailId":
      return { ...state, emailId: action.payload.emailId };

    case "setDOB":
      return { ...state, DOB: action.payload.DOB };

    case "setGender":
      return { ...state, gender: action.payload.gender };

    case "setAppoDate":
        return { ...state, appoDate: action.payload.appoDate };  

    default:
      return { ...state };
  }
};

const PatientComponent = (props: {
  patientData: patientType[];
  setPatientData: React.Dispatch<any>;
}) => {
  const { patientData, setPatientData } = props;
  const [state, dispatch] = useReducer<(state: any, action: any) => any>(
    reducerFun,
    initialState
  );

  const GenderArr = ["male", "female", "transgender", "other"];

  const submitFrom = () => {
    const id = `${state.fullName}-${Math.random() * 1000}-${
      Math.random() * 1000
    }`;
    state.id = id;
    setPatientData([...patientData, state]);
    alert ('Do you want to submit' )
  };
  const changeValue = (inputValue: string) => {
    dispatch({ type: "setFullName", payload: { fullName: inputValue } });
  };
  const changeValue1 = (inputValue: string) => {
    dispatch({ type: "setAddress", payload: { address: inputValue } });
  };
  const changeValue2 = (inputValue: string) => {
    dispatch({ type: "setCity", payload: { city: inputValue } });
  };
  const changeValue3 = (inputValue: string) => {
    dispatch({ type: "setPhone", payload: { phone: inputValue } });
  };
  const changeValue4 = (inputValue: string) => {
    dispatch({ type: "setEmailId", payload: { emailId: inputValue } });
  };
  const changeValue5 = (inputValue: string) => {
    dispatch({ type: "setDOB", payload: { DOB: inputValue } });
  };
  const changeValue6 = (inputValue: string) => {
    dispatch({ type: "setgender", paylaod: { gender: inputValue } });
  };
  const changeValue7 = (inputValue: string) => {
    dispatch({ type: "setAppoDate", payload: { appoDate: inputValue } });
  };

  return (
    <div className={styless["bbody"]}>
      <h1> Patient Appointment From</h1>

      <span >Full Name</span>
      <InputComponent
        inputType="text"
        inputValue={state.fullName}
        inputOnChange={changeValue}
        placeholder="Full Name"
      />

      <br />
      <span>Address</span>
      <InputComponent
        inputType="text"
        inputValue={state.address}
        inputOnChange={changeValue1}
        placeholder="Address"
      />
      <InputComponent
        inputType="text"
        inputValue={state.city}
        inputOnChange={changeValue2}
        placeholder="City"
      />
      <br />
      <span>Phone No.</span>
      <InputComponent
        inputType="number"
        inputValue={state.phone}
        inputOnChange={changeValue3}
        placeholder="Phone"
      />
      <br />
      <span>EMAIL ID</span>
      <InputComponent
        inputType="email"
        inputValue={state.emailId}
        inputOnChange={changeValue4}
        placeholder="Email Id"
      />
      <br />
      <span>Date of Birth</span>
      <InputComponent
        inputType="date"
        inputValue={state.DOB}
        inputOnChange={changeValue5}
        placeholder="DOB"
      />
      <br />
          <span>Gender :</span>
      {GenderArr.map((value1) => {
        return (
          <RadioCompo name="gender" value={value1} setRadio={changeValue6} />
        );
      })}

      <br />
      <span>APPOINTMENT DATE</span>
      <InputComponent
        inputType="date"
        inputValue={state.appoDate}
        inputOnChange={changeValue7}
        placeholder=""
      />
      <br />
      <button className={styless['buttonCol']} onClick={submitFrom}> Submit</button>
      
      <br />
    
      
    </div>
  );
};

export default PatientComponent;
