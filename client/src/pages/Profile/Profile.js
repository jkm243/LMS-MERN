import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./Profile.module.css";
import ToggleProfileInfo from "./ToggleProfileInfo/ToggleProfileInfo";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <CommonHeader title={user && user.userName && user.userName} />
      <div className={Styles.avatar}>
        <Avatar className={Styles.avatar__profile__pic} />
      </div>
      <Container fluid className="mb-5">
        <Row>
          <Col md={8}>
            <Paper className="p-5 m-3 shadow">
              <Typography
                className="text-center text-primary pb-4"
                variant="h5"
              >
                Информация вашего профиля
              </Typography>
              <ToggleProfileInfo
                exp={true}
                link="edit-profile"
                title="User details"
                value1="Edit profile"
                value2="Email address"
              />

              <ToggleProfileInfo
                link="privacy-policies"
                title="Конфиденциальность и политика"
                value1="Краткое описание хранения данных"
              />

              <ToggleProfileInfo
                link="course-details"
                title="Подробности курса"
                value1="Подробности курса"
              />

              <ToggleProfileInfo
                link="learning-plans"
                title="Разнообразный"
                value1="Записи в блоге"
                value2="Учебные планы"
              />
              <ToggleProfileInfo
                link="grades"
                title="Отчеты"
                value1="Сеансы браузера"
                value2="Обзор оценок"
              />
              <ToggleProfileInfo
                title="Мобильное приложение"
                value1="На этом сайте включен доступ к мобильному приложению.
            Скачайте мобильное приложение."
              />
            </Paper>
          </Col>
          <Col md={4} className="">
            <Paper className="p-4 m-3 d-flex flex-column shadow">
              <Typography className="my-3 text-primary" variant="h5">
                Профиль
              </Typography>
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Имя пользователя
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.userName}
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Предпочитаемый язык
              </Typography>
              <Typography variant="body1">Русский</Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Первый доступ к сайту
              </Typography>
              <Typography variant="body1">
                Воскресенье, 14 февраля 2023 года, 8:44 утра
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Последний доступ к сайту
              </Typography>
              <Typography variant="body1">
                Среда, 5 мая 2021 года, 14:44
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Адрес электронной почты
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.email}
              </Typography>
            </Paper>

            {
                user && user.role==="Student" &&  <Paper className="shadow p-4 d-flex flex-column m-3">
                <Typography className="my-3 text-primary" variant="h5">
                  Недавняя активность
                </Typography>
  
                <Typography
                  className="my-2"
                  style={{ color: "gray" }}
                  variant="body2"
                >
                  Курсы, которые я посещаю
                </Typography>
                <Typography variant="body1">9</Typography>
              </Paper>
                
              }

           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
