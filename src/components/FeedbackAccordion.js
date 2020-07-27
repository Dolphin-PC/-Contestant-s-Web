import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as Ref from '../config/firebase';
import { Badge } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FeedbackAccordion(props) {
  const classes = useStyles();
  const [feedback, setFeedback] = useState([]);

  const { selectedSeason, detailTitle, meetingLog } = props;

  useEffect(() => {
    Ref.teamList_Ref
      .child(`${selectedSeason}/${detailTitle}/teamDay/${meetingLog}/feedbacks`)
      .on('value', (snapShot) => {
        setFeedback([]);
        snapShot.forEach(function (childSnapShot) {
          console.log(childSnapShot.val());
          setFeedback((oldArray) => [...oldArray, childSnapShot.val()]);
        });
      });
  }, [1]);

  return (
    <div className={classes.root}>
      {feedback.map((con, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>
                <Badge size='bg' color='primary'>
                  {con.userName}
                </Badge>
                &emsp;
                <small>{con.date}</small>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{con.feedback}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
