import React from "react";
import SideCalender from "../../../components/Calender/SideCalender";
import UpcomingEvents from "./UpcommingEvents/UpcomingEvents";
import PersonIcon from "@material-ui/icons/Person";
import { Typography } from "@material-ui/core";

const RightSidebar = () => {
  return (
    <div>
        <div className="mb-4 rounded shadow" style={{backgroundColor:"white",padding:"10px"}}>
      <Typography variant="h6" className="p-3">Upcoming events</Typography>

      <UpcomingEvents
        Icon={PersonIcon}
          title="Посещаемость"
          time="Четверг, 6 мая, 12:00"
      />
      <UpcomingEvents
        Icon={PersonIcon}
          title="Посещаемость"
          time="Четверг, 14 мая, 12:00"
      />
      <UpcomingEvents
        Icon={PersonIcon}
          title="Посещаемость"
          time="Четверг, 21 мая, 12:00"
      />
      <UpcomingEvents
        Icon={PersonIcon}
          title="Посещаемость"
          time="Четверг, 27 мая, 12:00"
      />
      <UpcomingEvents
        Icon={PersonIcon}
          title="Посещаемость"
          time="Четверг, 4 июня, 12:00"
      />
      </div>
      <SideCalender />
    </div>
  );
};

export default RightSidebar;
