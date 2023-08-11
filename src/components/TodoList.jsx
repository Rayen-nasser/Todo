import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Card, Container, Divider, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Todo from './Todo';

const TodoList = () => {
  return (
    <Container maxWidth="sm">
      <Card maxWidth={275} sx={{textAlign: 'center', }}>
      <CardContent>
        <Typography variant="h2" component="div" fontWeight={800} mb={4}>
          مهامي
          <Divider />
        </Typography>
        {/* Start Filter BTN */}
        <ToggleButtonGroup
          style={{direction:"ltr",}}  
          color="error"
          exclusive
          aria-label="Platform"
        >
          <ToggleButton value="الغير">الغير منجز</ToggleButton>
          <ToggleButton value="المنجز">المنجز</ToggleButton>
          <ToggleButton value="الكل">الكل</ToggleButton>
        </ToggleButtonGroup>
        {/* End Filter BTN */}
        <Todo/>
        <Todo/>
        <Todo/>
        <Box sx={{ display: 'flex',justifyContent:'space-between',alignItems:'center', }}>
          <Button variant="contained" color="error" size="large" fullWidth>Post</Button>
          <Button fullWidth>
              <TextField  label="Outlined" size="large" color="error"/>
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Container>
  )
}

export default TodoList
