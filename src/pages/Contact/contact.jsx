
import { Grid, Card, CardContent, Typography, Link } from '@mui/material';  
import LocationOnIcon from '@mui/icons-material/LocationOn';  
import EmailIcon from '@mui/icons-material/Email';  
import PhoneIcon from '@mui/icons-material/Phone';  
import ContactForm from '../../components/contactform/contactform';

const Contact = () => {  
  return (  
    <>
    <Grid container spacing={2} justifyContent="center" style={{ padding: '20px' }}>  
      <Grid item xs={12} sm={4}>  
        <Card variant="outlined" style={{ textAlign: 'center', padding: '20px' }}>  
          <CardContent>  
            <LocationOnIcon style={{ fontSize: '40px', color: '#3f51b5' }} />  
            <Typography variant="h6" style={{ color: '#3f51b5', marginTop: '10px' }}>  
              Address  
            </Typography>  
            <Typography variant="body2" color="textSecondary">  
              1652 Cordia Cir  
              <br />  
              Newton, North Carolina (NC), 28658  
            </Typography>  
          </CardContent>  
        </Card>  
      </Grid>  
      <Grid item xs={12} sm={4}>  
        <Card variant="outlined" style={{ textAlign: 'center',height:"100%", padding: '20px' }}>  
          <CardContent>  
            <EmailIcon style={{ fontSize: '40px', color: '#3f51b5' }} />  
            <Typography variant="h6" style={{ color: '#3f51b5', marginTop: '10px' }}>  
              Email  
            </Typography>  
            <Typography variant="body2" color="textSecondary">  
              <Link href="mailto:hello@mui.dev ">hello@mui.dev </Link> 
            </Typography>  
          </CardContent>  
        </Card>  
      </Grid>  
      <Grid item xs={12} sm={4}>  
        <Card variant="outlined" style={{ textAlign: 'center',height:"100%", padding: '20px' }}>  
          <CardContent>  
            <PhoneIcon style={{ fontSize: '40px', color: '#3f51b5' }} />  
            <Typography variant="h6" style={{ color: '#3f51b5', marginTop: '10px' }}>  
              Phone  
            </Typography>  
            <Typography variant="body2" color="textSecondary">  
              <Link href="tel:(318) 285-9856  ">(318) 285-9856  </Link> 
            </Typography>  
          </CardContent>  
        </Card>  
      </Grid>  
    </Grid>  
    <div>
      <ContactForm/>
    </div>
    </>
  );  
};  

export default Contact;