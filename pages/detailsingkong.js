import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import singkong from "assets/img/product/singkong1.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="TaniBisnisShop"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
        <br/>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/allproduct">
            Detail Produk
          </Link>
          <Typography color="textPrimary">Singkong</Typography>
        </Breadcrumbs>
          <div className={classes.container}>
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.singkong}>
                  <div>
                    <br/>
                    <img src={singkong} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                  </div>
                  <br/><br/>
                </div>
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
              <br/><br/><br/>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Singkong</h3>
                    <h6>
                      Gambar diatas hanya ilustrasi <br/>
                      <br/>
                      Rp.20.000/kg<br/>
                      min. 1kg
                    </h6>
                  </div>
              </GridItem>
            </GridContainer>            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
