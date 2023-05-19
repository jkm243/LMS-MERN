import { Button, Divider } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './CourseCard.module.css'
import LazyLoad from 'react-lazyload';


const CourseCard = ({title,name,id,img}) => {
    return (
        <LazyLoad height={200} offset={100} once={true} >
        <div className={Styles.course__Card}>
            <Link to={`/course/${id}`} className={Styles.container}>
            <img className={Styles.image} src={img}alt=""/>
            <div className={Styles.overlay}>
                        <p className={Styles.text}>Смотреть</p>
            </div>
            </Link>
            
            
            <div className={Styles.course__content}>
                    <span>Январь-июнь 2023 года</span>
                <h5>{name}</h5>
                <h5>{title}</h5>
                    <Button color='primary' variant="contained" >Опубликованный</Button><br/>
                    <span>Это шаблон курса, который будет использоваться в качестве учебного комплекта для преподавателей.</span>
            </div>
            
        </div>
        <Divider/>
        </LazyLoad>
    );
};

export default CourseCard;