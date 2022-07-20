import React from 'react';
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <div>
    <h2>404 Page Not Found</h2>
    <h2>Click here to go back 
        <button >
            <Link to='/product'>Home</Link>
        </button>
    </h2>
    </div>

  );
}

export default PageNotFound;