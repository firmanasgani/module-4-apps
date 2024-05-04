import { Link } from 'react-router-dom'
import Header from './Header/Index';

export const NotLoginYet = () => {
    return (
      <>
        <Header />
        <div  className="flex justify-center items-center" style={{flexDirection: 'column', height: '100%'}}>
          Welcome to category Apps.
          <div>
            Click Here to <Link to="/signin" style={{color: 'red'}}>Sign In.</Link>
          </div>
          <div>
            Click Here to <Link to="/signup" style={{color: 'blue'}}>Sign Up.</Link>
          </div>
        </div>
      </>
    );
  };

