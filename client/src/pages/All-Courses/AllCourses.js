
import { Typography } from '@material-ui/core';
import React,{lazy, Suspense} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseCard from '../DashBoard/CourseCard/CourseCard';
import CardOfAllCourse from './CardOfCourse/CardOfAllCourse';


const AllCourses = () => {
    return (
        <div>
            <Container>
               <Typography className='text-center my-3 border-bottom' variant='h3' color="primary" >
                    Все курсы
               </Typography>
                <Suspense fallback={<div>Загрузка...</div>}>
               <CardOfAllCourse/>
               </Suspense>
            
            </Container>
        </div>
    );
};

export default AllCourses;