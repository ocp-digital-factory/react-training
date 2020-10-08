import React from "react";
import { Paper, Typography, IconButton, Avatar, Grid } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { ArrowBack, Phone, AlternateEmail, Work } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyle = makeStyles(theme => ({
  paper: { padding: theme.spacing(2) },
  fullName: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const getAvatarContent = fullName =>
  fullName?.split(" ")?.map(str => str?.substring(0, 1));

const Person = props => {

  const history = useHistory();
  const classes = useStyle();
  const persons = useSelector(state => state.persons);


  let { email } = useParams();
  if (!email) return "oups!!";

  const profile = persons.find(person => person.email === email);
  if (!profile) return "oups, unfound profile!!";

  return (
    <>
      <Typography variant="h5" color="primary">
        <IconButton onClick={() => history.push("/persons")}>
          <ArrowBack />
        </IconButton>{" "}
        Profile
      </Typography>
      <Paper elevation={3} className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={classes.fullName}>
              <Avatar component="span">
                {getAvatarContent(profile.fullName)}
              </Avatar>
              <Typography display="inline">
                <strong>{profile.fullName}</strong>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            <Typography color="textSecondary" display="inline">
              <Phone fontSize="small" /> Phone Number:
            </Typography>
            <Typography color="primary" display="inline">
              {profile.phoneNumber}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            <Typography color="textSecondary" display="inline">
              <AlternateEmail fontSize="small" />
              Email:
            </Typography>
            <Typography color="primary" display="inline">
              {profile.email}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            <Typography color="textSecondary" display="inline">
              <Work fontSize="small" />
              Job:
            </Typography>
            <Typography color="primary" display="inline">
              {profile.job}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Person;
