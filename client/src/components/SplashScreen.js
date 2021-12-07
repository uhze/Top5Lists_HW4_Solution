import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'
export default function SplashScreen() {
    return (
        <div id="splash-screen">
            Welcome to <br />The Top 5
            Lister
            <br />
            <Button variant="outlined"><Link to='/login/'>Login</Link></Button>
            <Button variant="outlined"><Link to='/register/'>Create New Account</Link></Button>
            <Button variant="outlined"><Link to='/loginGuest/'>Login As Guest</Link></Button>
            <br/>
            <br/>
            <br/>
            <Typography>Eddie Zhu</Typography>
            
        </div>
        
    )
}