import { useState } from "react";
import PatientComponent, { patientType } from "../Patient/PatientComponent";
import DoctorComponent from "../Doctor/DoctorComponent";


const MainComponent =()=>{
    const [patientData,setPatientData] = useState<patientType[]>([]);
    return(
  <div>
        <PatientComponent patientData={patientData} setPatientData={setPatientData}/>
        
        <DoctorComponent patientData={patientData} setPatientData={setPatientData}/>
        </div>
    )
}

export default MainComponent;