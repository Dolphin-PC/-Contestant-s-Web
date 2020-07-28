import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import * as Ref from '../config/firebase';
import { Badge } from 'reactstrap';
import '../styles/main.css';
import * as actions from '../actions';

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
  const [updateFeedback, setUpdateFeedback] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState('');

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
  const handleSelectFeedback = (index) => {
    if (feedback[index].userUID === props.userUID) {
      setSelectedFeedback(index);
    }
  };
  const handleUpdateFeedback = (index) => {
    Ref.teamList_Ref
      .child(
        `${selectedSeason}/${detailTitle}/teamDay/${meetingLog}/feedbacks/${feedback[index].feedbackUID}`
      )
      .update({
        feedback: updateFeedback,
      });
    setSelectedFeedback('');
  };
  const handleDeleteFeedback = (index) => {
    if (feedback[index].userUID === props.userUID) {
      Ref.teamList_Ref
        .child(
          `${selectedSeason}/${detailTitle}/teamDay/${meetingLog}/feedbacks/${feedback[index].feedbackUID}`
        )
        .remove();
    }
  };

  return (
    <div className={classes.root}>
      {feedback.map((con, index) => {
        return (
          <div key={index}>
            {selectedFeedback === index ? (
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
                  <textarea
                    onChange={(e) => setUpdateFeedback(e.target.value)}
                    id='feedbackAccordionTextArea'
                    defaultValue={con.feedback}
                  ></textarea>
                </AccordionDetails>
                <div id='feedbackAccordionIcon'>
                  <CheckCircleOutlineIcon
                    onClick={() => handleUpdateFeedback(index)}
                  />
                  &ensp;
                  <DeleteForeverIcon />
                </div>
              </Accordion>
            ) : (
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
                <div id='feedbackAccordionIcon'>
                  <BorderColorIcon
                    onClick={() => handleSelectFeedback(index)}
                  />
                  &ensp;
                  <DeleteForeverIcon
                    onClick={() => handleDeleteFeedback(index)}
                  />
                </div>
              </Accordion>
            )}
          </div>
        );
      })}
    </div>
  );
}
