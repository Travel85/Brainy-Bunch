import Grid from "@mui/material/Unstable_Grid2";
import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Offercard } from "../components/Offercard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Person2Icon from "@mui/icons-material/Person2";
import HomeIcon from "@mui/icons-material/Home";
import { v4 as uuidv4 } from "uuid";

export function Home() {
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      title: "Offer Asian cooking 🐖",
      description: "I offer Asian cooking classes for free",
      image: "/food1.jpg",
      avatarLetter: "HM",
      badgeContent: 22,
      creationDate: "16.08.2024",
      price: "free",
      location: "Some street 1, 11974 City",
      contact: "test@email.com",
    },
    {
      id: uuidv4(),
      title: "Need help?",
      description: "I can help with your housework",
      image: "/washing-dishes1.jpg",
      avatarLetter: "GT",
      badgeContent: 2,
      creationDate: "16.08.2024",
      price: "99 €",
      location: "Some street 1, 11974 City",
      contact: "test@email.com",
    },
    {
      id: uuidv4(),
      title: "Need a taxi?",
      description: "I will drive you to work, school etc",
      image: "/drive1.jpg",
      avatarLetter: "PF",
      badgeContent: 15,
      creationDate: "16.08.2024",
      price: "15 €",
      location: "Some street 1, 11974 City",
      contact: "test@email.com",
    },
  ]);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "150vh",
      }}>
      <Box>
        <Grid container spacing={2}>
          {/*  Header */}
          <Grid xs={12} md={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}>
              <img
                style={{
                  width: "300px",
                  height: "auto",
                  maxWidth: "600px",

                  borderRadius: "8px",
                  margin: "5px",
                }}
                src="/Brainy_Bunch_logo_transparent_black_font_300x50.png"></img>
            </Box>
            <hr></hr>
          </Grid>

          {/*   Main Area */}

          <Grid
            xs
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {posts.map((post) => {
              return (
                <Fragment key={post.id}>
                  <Offercard
                    avatarLetter={post.avatarLetter}
                    image={post.image}
                    badgeContent={post.badgeContent}
                    creationDate={post.creationDate}
                    title={post.title}
                    description={post.description}
                    price={post.price}
                    location={post.location}
                    contact={post.contact}></Offercard>
                </Fragment>
              );
            })}
          </Grid>

          {/*     Footer */}
          <Grid xs={12} md={12}>
            <Fab
              sx={{
                position: "fixed",
                bottom: "6%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              color="primary"
              aria-label="add">
              <AddIcon />
            </Fab>
            <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction
                  label="Favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Profile"
                  icon={<Person2Icon />}
                />
              </BottomNavigation>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
