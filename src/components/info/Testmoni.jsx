import { Grid } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {FaStar} from 'react-icons/fa'
const useStyles = makeStyles((theme) => ({
     root: {
       maxWidth: 345,
     },
     media: {
       height: 0,
       paddingTop: '56.25%', // 16:9
     },
     expand: {
       transform: 'rotate(0deg)',
       marginLeft: 'auto',
       transition: theme.transitions.create('transform', {
         duration: theme.transitions.duration.shortest,
       }),
     },
     expandOpen: {
       transform: 'rotate(180deg)',
     },
     avatar: {
       backgroundColor: red[500],
     },
   }));

function Testmoni({title,name,date}) {
     const classes = useStyles();
     return (
          // <Grid item md={4} xs={12}>
               <Card className={classes.root}>
                    <CardHeader 
                         avatar={ <Avatar aria-label="recipe" className={classes.avatar}>{name}</Avatar>}
                         action={<IconButton aria-label="settings"><FaStar /></IconButton>}
                         title={title}
                         subheader={date}
                         />
                         <CardContent>
                              <Typography variant="body2" color="textSecondary" component="p">
                                   This impressive paella is a perfect party dish and a fun meal to cook together with
                                   your
                                   guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
                         </CardContent>
                   
                     </Card>
                         // </Grid>
     )
}

export default Testmoni
