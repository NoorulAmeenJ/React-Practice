import {TextField, Button, Card, CardActions, CardContent,Typography } from "@mui/material";
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
import React, { useState } from "react";
// import { Button, Card } from "react-bootstrap";
import data from "../data/data.js"
import base from "../base/base.js"
import { SentimentDissatisfied, SettingsPhoneTwoTone } from "@mui/icons-material";

export function StudentDetails () {
    const [studentsData, setStudents] = useState(data)
    const [id, setId] =  useState("")
    const [name, setName] =  useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [experience, setExperience] = useState("")
    const [show, setShow] = useState(true)
    const [editId, setEditId] = useState("")
    const [showUpdate, setShowUpdate] = useState(false)
    const [showAdd, setShowAdd] = useState(true)
    // const foo = [5,1,2,3]
    // const newfoo = [...foo,5]
    // console.log(foo,newfoo)
    const addNewStudents = () => {
      let newStudent = {
        id,
        name,
        gender,
        batch,
        yearsOfExperience: experience
      }  
 console.log(newStudent)     
 setStudents([...studentsData,newStudent]) 
 setId("")
 setName("")
 setBatch("")
 setGender("")
 setExperience("")
    }
    const deleteStudentData = (studId) => {
      const selectedStudents = studentsData.filter((stud)=> stud.id != studId) ;
      setStudents(selectedStudents);
      
    }
    const editandSelectStudent = (idx) => {
    
      setEditId(idx);

      // filter means it will give as array 
         const selectedData = studentsData.find((stud) => stud.id === idx) 
         setId(selectedData.id);
         setName(selectedData.name);
         setBatch(selectedData.batch);
         setGender(selectedData.gender);
         setExperience(selectedData.yearsOfExperience);
         setShowAdd(false)
         setShowUpdate(true)

    }
    const updateStudentData = (idx) => {
      const editStudent = studentsData.findIndex((stud) => stud.id === editId);
      console.log(editStudent)

      const updatedObj = {
        id,
        name,
        gender,
        batch,
        yearsOfExperience: experience
      }  
      console.log(updatedObj)
      studentsData[editStudent] = updatedObj;
     console.log(studentsData)
      setStudents([...studentsData])

      setShowAdd(true)
         setShowUpdate(false)
    }     
    return(
        <div className="containers">
            <div className="input-section">
            <TextField   label="id"
            onChange={(event) =>(setId(event.target.value))}
            value = {id}
              />
            <TextField   
            onChange={(event) =>(setName(event.target.value))}
            value = {name}
            label="name"   />
            <TextField  
            onChange={(event) =>(setBatch(event.target.value))}
            value = {batch}
             label="batch"   />
            <TextField  
            onChange={(event) =>(setGender(event.target.value))}
            value = {gender}
             label="gender"   />
            <TextField  
            onChange={(event) =>(setExperience(event.target.value))}
            value = {experience}
             label="experience"   />
      { showAdd ?
            <Button
            onClick={addNewStudents}
            size="small"
            color="success">Add
             </Button>
             :
              ""}
      { showUpdate ?
            <Button
            onClick={updateStudentData}
            size="small"
            color="secondary">Update
            </Button>
            :
            ""}
            </div>

        <div className="card-containers">
            {studentsData.map((stud, id)=>(
                <Card sx={{ maxWidth: 345 }} key={stud.id}>
     
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         {stud.name}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {stud.batch}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {stud.gender}
         </Typography>
         <Typography variant="body2" color="text.secondary">
         {stud.yearsOfExperience}
         </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" onClick={()=> editandSelectStudent(stud.id)} >Edit</Button>
       <Button varient="contained" color="error" onClick={()=> {deleteStudentData(stud.id)}}>Delete</Button>
     </CardActions>
   </Card>


            ))}
             
        </div>
        </div>

    )
}