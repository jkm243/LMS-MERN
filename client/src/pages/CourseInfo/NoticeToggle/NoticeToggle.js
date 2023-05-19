import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NoticeToggleRow from './NoticeToggleRow/NoticeToggleRow';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { toggleTitle } from '../ToggleData/ToggleData';
import { Divider } from '@material-ui/core';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ExtensionIcon from '@material-ui/icons/Extension';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin:"10px 0px",
    

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



const NoticeToggle = ({exp}) => {
    const classes = useStyles();
  
    return (
        <div>
          {
            toggleTitle.map(({id,title})=>{
              return(
                <div key={id} className={classes.root}>
                <Accordion style={{backgroundColor:"#EDEFF7"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>{title}</Typography>
                  </AccordionSummary>
                  <Typography className='mx-3 my-2' variant="h6">{title}</Typography>
                    <Typography className='mx-5 my-2' variant="h6">Материалы для урока</Typography>
                  <AccordionDetails>
                    
                    
                    <NoticeToggleRow
                    
                    Icon={NoteAddIcon}
                        title="Объявление о курсе"
                        description="Общие новости и объявления от преподавателей для слушателей курса. Преподаватели будут использовать это действие для публикации обновлений курса, а учащиеся автоматически подписываются на это объявление для получения быстрых обновлений."
                    />
                    <Divider/>
                    </AccordionDetails>
                    <AccordionDetails>
                    <NoticeToggleRow
                    
                    Icon={MovieFilterIcon}
                    title="
                    Файл документа урока (презентации)"
                        description="Это основной материал от учителя на уроке. Это может быть документ Word, PDF или PowerPoint. Просто отредактируйте это действие и прикрепите файл документа в разделе. Преподаватели могут использовать поле описания, чтобы предоставить учащимся дополнительные рекомендации по ознакомлению с документом."
                    />
                    <Divider/>
                    </AccordionDetails>
                    <AccordionDetails>
                    <NoticeToggleRow
                    
                    Icon={ExtensionIcon}
                        title="Внешний ресурс для lessonURL"
                        description="Нажмите Редактировать и замените заголовок и внешний URL-адрес, чтобы добавить внешние ресурсы, имеющие отношение к уроку."
                    />
                    <Divider/>
                    </AccordionDetails>
                    <AccordionDetails>
                    <Typography variant="h6">
                    Lesson Activities
                    </Typography>
                    <AccordionDetails>
                      <Divider/>
                    </AccordionDetails>
                    </AccordionDetails>
                    <AccordionDetails>
                    <NoticeToggleRow
                    
                    Icon={InsertCommentIcon}
                        title="Обсуждение урока"
                        description='Используйте дискуссионный форум, чтобы вовлечь учащихся в обсуждение, относящееся к темам урока. Это хороший способ вовлечь их в совместные занятия и помогать друг другу в учебе вместе с учителем. Существует несколько типов форумов. Это форум вопросов и дискуссий, где студенты могут задавать вопросы и отвечать друг другу. Учитель также может предоставить им обратную связь по их представлению. Лучше создать несколько тем для обсуждения, задавая несколько вопросов, на которые учащиеся могли бы ответить. Чтобы сделать это, нажмите на кнопку "Добавить новый вопрос". Нажмите на кнопку Изменить, чтобы изменить настройки в соответствии с потребностями.'
                    />
                    <Divider/>
                  </AccordionDetails>
                </Accordion>
                
                
              </div>

              )
            })
          }
            
            
        </div>
    );
};

export default NoticeToggle;