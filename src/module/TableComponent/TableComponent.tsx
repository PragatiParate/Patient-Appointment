import styless from "./TableComponent.module.scss"

const TableComponent =( props:{
    tableData : any[];
    deleteFun :(id:any)=> void;
})=>{
  const {tableData,deleteFun}= props;
    return(
     <div>
        <table className={styless["table"]}>
        <tr className={styless["tr"]}>
          <th className={styless["th"]}>fullName</th>
          <th className={styless["th"]}>address</th>
          <th className={styless["th"]}>city</th>
          <th className={styless["th"]}>phone</th>
          <th className={styless["th"]}>emailId</th>
          <th className={styless["th"]}>DOB</th>
          <th className={styless["th"]}>appoDate</th>
          <th className={styless["th"]}>action</th>
        </tr>
     
        
         {tableData.map((row)=>{
            return(
                <tr className={styless["tr"]}>
                <td className={styless["td"]}>{row.fullName}</td>
                <td className={styless["td"]}>{row.address}</td>
                <td className={styless["td"]}>{row.city}</td>
                <td className={styless["td"]}>{row.phone}</td>
                <td className={styless["td"]}>{row.emailId}</td> 
                <td className={styless["td"]}>{row.DOB}</td> 
                <td className={styless["td"]}>{row.appoDate}</td> 
                <td className={styless["td"]}>
                  <button onClick={() => deleteFun(row.id)}>delete</button>
                  </td> 
              </tr>
            );
         })}
       </table>   
     </div>
    )
    }

export default TableComponent;