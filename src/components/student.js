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

export function StudentDetails () {
    const [studentsData, setStudentsData] = useState(data)
    const [id, setid] =  useState("")
    const [name, setName] =  useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [experience, setExperience] = useState("")
 
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
 setStudentsData([...studentsData,newStudent]) 
    }
           
    return(
        <div className="containers">
            <div className="input-section">
            <TextField   label="id"
            onChange={(event) =>(setid(event.target.value))}
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
            <Button
            onClick={addNewStudents}
            size="small">Add</Button>
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
       <Button size="small">Edit</Button>
       <Button varient="contained" color="error">Delete</Button>
     </CardActions>
   </Card>


            ))}
             
        </div>
        </div>

    )
}