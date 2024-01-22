import TableComponent from "../../module/TableComponent/TableComponent";
import { patientType } from "../Patient/PatientComponent";


const DoctorComponent =( props:{
    patientData : patientType[];
    setPatientData : React.Dispatch<React.SetStateAction<patientType[]>>
})=>{

    const {patientData,setPatientData}= props;

    const deleteFun = (id:any)=>{
        const newPatientData:patientType[]= patientData.filter((patient)=>{
            if (patient.id !=id){
                return patient
            }
        })
        setPatientData(newPatientData);
    }
    console.log('DoctorComponent patient',patientData)
    return(
        <div>
            <h1>Doctor Appoinment</h1>
              <TableComponent  tableData={patientData} deleteFun={deleteFun}/>
        </div>
    )
}

export default DoctorComponent;