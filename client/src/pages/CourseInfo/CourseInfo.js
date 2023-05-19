import { Container, Paper, Typography, Button } from "@material-ui/core";

import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./CourseInfo.module.css";
import NoticeToggle from "./NoticeToggle/NoticeToggle"; 
import { useHistory } from "react-router";

const CourseInfo = () => {
  const history = useHistory()
  return (
    <div>
      <CommonHeader title="АНАЛИЗ И РАЗРАБОТКА АЛГОРИТМА" />
      <Container className="my-5">
        <Paper className="px-5 py-3">
          <div className="">
            <div className="d-flex justify-content-between align-items-center my-4">
              <Typography variant="h6">Содержание курса</Typography>
              <Typography style={{ color: "GrayText" }} variant="subtitle2">
                Дата начала курса: 19/09/23 Категория: Январь - июнь 2023
              </Typography>
            </div>
            <NoticeToggle />
            <Button className='my-3' onClick={() => {
              history.push('/certification')
            }} variant="contained" color="primary">
              Я закончил курс
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default CourseInfo;
