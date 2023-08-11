import { Box, Card, IconButton,  Typography } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DoneIcon from '@mui/icons-material/Done';

const Todo = () => {
  return (
    <Card  sx={{marginTop: 5,bgcolor: 'skyblue',}}>
         <Box p={3} sx={{ display: 'flex',justifyContent:'space-between',alignItems:'center', }}>
            <Typography >
                rayen nasser
            </Typography>
            <Box>
                <IconButton  style={{color:"#8bc34a",background:"white",border: "solid #8bc34a 3px",marginLeft: "5px"}} color="pramiry" >
                    <DoneIcon />
                </IconButton>
                <IconButton style={{color:"#8bc34a",background:"white",border: "solid #8bc34a 3px",marginLeft: "5px"}}  color="pramiry" >
                    <CreateOutlinedIcon/>
                </IconButton>
                <IconButton style={{color:"#8bc34a",background:"white",border: "solid #8bc34a 3px"}} color="pramiry" aria-label="delete" >
                    <DeleteOutlineIcon />
                </IconButton>
            </Box>
    </Box>
    </Card>
    )
}

export default Todo
