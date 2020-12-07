import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const MaterialUI = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    News
                </Typography>
                </Toolbar>
            </AppBar>

    <Grid container spacing={3}>
        <Grid item md={3}>
      <Card>
        <CardMedia
          component="img"
          alt="Fox"
          height="140"
          image="https://images.unsplash.com/photo-1578170681526-de18d598a5b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Fox"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fox
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md={3}>
            <Card>
                <CardMedia
                component="img"
                alt="Fox"
                height="140"
                image="https://images.unsplash.com/photo-1578170681526-de18d598a5b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                title="Fox"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Fox
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).
                </Typography>
                </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card></Grid>
            </Grid>        </div>
    );
};

export default MaterialUI;