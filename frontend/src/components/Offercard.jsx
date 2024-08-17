import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Badge from "@mui/material/Badge";

import { useState } from "react";
import OffercardDetails from "./modals/OffercardDetails";

export function Offercard({
  title,
  description,
  avatarLetter,
  image,
  creationDate,
  location,
  price,
  contact,
  badgeContent,
}) {
  const [likes, setLikes] = useState(0);
  const [open, setOpen] = useState(false);
  const onModal = () => setOpen(!open);
  return (
    <Paper elevation={1}>
      <Card
        sx={{
          "&:hover": {
            boxShadow: 15,
          },
        }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: green[500] }}>{avatarLetter}</Avatar>}
          action={
            <Badge
              badgeContent={badgeContent}
              color="secondary"
              sx={{
                margin: "10px",
              }}>
              <ThumbUpOffAltIcon color="action" sx={{ margin: "4px" }} />
            </Badge>
          }
          title={title}
          subheader={creationDate}></CardHeader>
        <CardMedia
          component="img"
          height="195"
          image={image}
          alt="asian food"></CardMedia>
        <CardContent>
          <Typography variant="body2">
            {description}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton color="primary" aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="give like"
            onClick={() => setLikes(likes + 1)}>
            <ThumbUpIcon />
          </IconButton>
          <Button color="primary" size="small" onClick={onModal}>
            Details
          </Button>
        </CardActions>
      </Card>
      {open ? (
        <OffercardDetails
          open={open}
          setOpen={setOpen}
          title={title}
          description={description}
          price={price}
          location={location}
          contact={contact}></OffercardDetails>
      ) : null}
    </Paper>
  );
}
