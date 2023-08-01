// src/components/RoundedDivButtons.js
import React from 'react';
import './RoundedDivButtons.css';

import {Box,Button, Typography} from "@mui/material"
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

const RoundedDivButtons = ({ buttonCount }) => {
  // Calculate the angle between each button
  const angleStep = 360 / buttonCount;

  const buttonIcons = [
    { icon: <TextFieldsOutlinedIcon />, label: "Button 1" },
    { icon: <EditOutlinedIcon />, label: "Button 1" },
    { icon: <BookmarksOutlinedIcon />, label: "Button 1" },
    { icon: <CloudUploadOutlinedIcon />, label: "Button 1" },
    { icon: <CloudUploadOutlinedIcon />, label: "Button 1" },
    { icon: <CloudUploadOutlinedIcon />, label: "Button 1" },
    { icon: <CloudUploadOutlinedIcon />, label: "Button 1" },
    { icon: <CloudUploadOutlinedIcon />, label: "Button 1" },
    { icon: <CloudUploadOutlinedIcon />, label: "Button 1" },
     { icon: <CloudUploadOutlinedIcon />, label: "Button 1" },
    { icon: <CloudUploadOutlinedIcon />, label: "Button 1" },
   
    { icon: <InterestsOutlinedIcon />, label: "Button 4" },
   
    
    // Add more button objects as needed
  ];
  // Generate an array of angles for each button
  const angles = Array.from({ length: buttonCount }, (_, index) => index * angleStep);

  return (
    <>
 <Box sx={{
    width: "500px",
    height:" 500px",
    borderRadius: "50%",
    border: "10px solid #a0a6f8",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    clipPath: "circle(320px at 100% 50%)",
 }}>
    
      {angles.map((angle, index) => (
        
        <Button
          key={index}
          sx={{
            position: "absolute",
            width: "60px",
            height:" 60px",
            borderRadius:"20px",
            backgroundColor: "#007bff",
            color:" #fff",
            border: "none",
            
            cursor: "pointer",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `rotate(${angle}deg) translateX(260px) rotate(-${angle}deg)`,
            
          }}
         
        >
       {buttonIcons[index]?.icon}
      
        </Button>
        
       

       
       
      ))}
    </Box>
  
    </>
    );
   
};

export default RoundedDivButtons;
