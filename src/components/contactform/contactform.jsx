import  { useState } from 'react';  
import {  
  TextField,  
  Checkbox,  
  FormControlLabel,  
  Button,  
  Box,  
  Typography,  
} from '@mui/material';  

const ContactForm = () => {  
  const [formData, setFormData] = useState({  
    firstName: '',  
    lastName: '',  
    email: '',  
    message: '',  
    agree: false,  
  });  

  const handleChange = (e) => {  
    const { name, value, type, checked } = e.target;  
    setFormData({  
      ...formData,  
      [name]: type === 'checkbox' ? checked : value,  
    });  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Handle form submission logic here  
    console.log(formData);  
  };  

  return (  
    <Box  
    className='my-10'
      component="form"  
      onSubmit={handleSubmit}  
      sx={{  
        display: 'flex',  
        flexDirection: 'column',  
        gap: 2,  
        maxWidth: 900,  
        margin: 'auto',  
        padding: 2,  
        border: '1px solid #ccc',  
        borderRadius: 2,  
      }}  
    >  
      <Typography variant="h6">Contact Us</Typography>  
      <TextField  
        label="First name *"  
        InputProps={{  
            style: { color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.1)' }, // Text color and background  
          }} 
        name="firstName"  
        value={formData.firstName}  
        onChange={handleChange}  
        required  
        InputLabelProps={{  
            style: { color: 'white' }, // Label color  
          }}  
      />  
      <TextField  
        label="Last name *"  
        name="lastName"  
        value={formData.lastName}  
        onChange={handleChange}  
        required 
        InputProps={{  
            style: { color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.1)' }, // Text color and background  
          }}  
          InputLabelProps={{  
            style: { color: 'white' }, // Label color  
          }}  
      />  
      <TextField  
        label="Email address *"  
        name="email"  
        type="email"  
        value={formData.email}  
        onChange={handleChange}  
        required  
        InputProps={{  
            style: { color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.1)' }, // Text color and background  
          }} 
          InputLabelProps={{  
            style: { color: 'white' }, // Label color  
          }}  
      />  
      <TextField  
        label="Message *"  
        name="message"  
        multiline  
        rows={4}  
        value={formData.message}  
        onChange={handleChange}  
        required  
        InputProps={{  
            style: { color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.1)' }, // Text color and background  
          }} 
          InputLabelProps={{  
            style: { color: 'white' }, // Label color  
          }}  
      />  
      <FormControlLabel  
        control={  
          <Checkbox  
            name="agree"  
            checked={formData.agree}  
            onChange={handleChange}  
          />  
        }  
        label="I agree to the terms of use and privacy policy."  
      />  
      <Button variant="contained" color="primary" type="submit">  
        Submit  
      </Button>  
    </Box>  
  );  
};  

export default ContactForm;