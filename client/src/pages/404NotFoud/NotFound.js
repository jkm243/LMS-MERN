import { Button, Typography } from "@material-ui/core";

import React from "react";
import { useHistory } from "react-router";
import Styles from "./Notfound.module.css";

const NotFound = () => {
    const history=useHistory()
  return (
    <div className={Styles.main__div}>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h3>Ooups! Страница не найдена</h3>
            <h1><span>4</span><span>0</span><span>4</span></h1>
          </div>
          <h2>Приносим извинения, но запрошенная вами страница не была найдена</h2>
        </div>        
      </div>
      {/* <Typography className="text-center text-light" variant="h2">
        Oops!! <br />
        404 Not Found
      </Typography> */}
      <Button className='my-3' onClick={()=>{
          history.push('/admin-dashboard')
      }} variant="contained" color="primary">
        Вернуться на главную страницу
      </Button>
    </div>
  );
};

export default NotFound;
