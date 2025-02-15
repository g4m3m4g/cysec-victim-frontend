import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const URL = "https://cysec-victim-backend.onrender.com";
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null)
  useEffect(() => {
    async function fetchEmployee(){
        try {
            const response = await fetch(`${URL}/employees/${id}`)
            console.log(`${URL}/employees/${id}`)
            if (!response.ok) {
                setError(response.status)
                throw new Error("Failed to fetch employee data");
                
              }
              const data = await response.json();
              console.log(data)
              setEmployee(data);
        } catch (error) {
            console.log(error)
        }
    }
    fetchEmployee() 
  }, [id]);

  if(error){
    return(
        <div className="">
            {error}
        </div>
    )
  }
  if(!employee){
    return(
        <div className="text-5xl flex min-h-screen w-full justify-center items-center">
            Loading
        </div>
    )
  }
  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Email:</strong> {employee.email}</p>
    </div>
  );
};
export default EmployeeDetail;
