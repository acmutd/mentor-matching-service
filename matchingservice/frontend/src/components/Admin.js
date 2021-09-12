import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Admin = () => {
  const [initialData, setInitialData] = useState([{}]);

  const buttonSubmit = () => {
    fetch('/getNames')
      .then((response) => response.json())
      .then((data) => setInitialData(data));
  };

  return (
    <React.Fragment>
      <div>
        <Button
          onClick={buttonSubmit}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        <div>{JSON.stringify(initialData)}</div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
