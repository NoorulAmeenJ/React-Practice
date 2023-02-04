import React from "react"
import { useParams } from "react-router-dom"
import Base from "../base/base"

const StudentsProfile = ({studentsData}) => {
    const {id} = useParams()
    const student = studentsData[id]
   
    return(
     <Base
     title="student profile"
     description="individual student details"
     >
        <div>
            <h1>Student-Profile</h1>
            <h2>Student-Name:{student.name}</h2>
            <p>Gender:{student.gender}</p>
            <p>Batch:{student.batch}</p>
            <p>Years of experience:{student.yearsOfExperience}</p>
        </div>
     </Base>
    )
}

export default StudentsProfile