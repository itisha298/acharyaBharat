import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { IconButton, Typography, Link, Badge } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 200,
    textAlign: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
}));

export const AvatarInfo = React.memo(function ProfileCard() {
  const styles = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  const isGV = user && user.maLoaiNguoiDung === "GV";

  return (
    <Card className={cx(styles.card)}>
      {user ? (
        <CardContent>
          <Badge
            badgeContent={isGV ? user.maLoaiNguoiDung : null}
            color="error"
          >
            <Avatar
              className={styles.avatar}
              src={"https://i.pravatar.cc/150?img=14"}
            />
          </Badge>
          <h3 className={styles.heading}>{user.taiKhoan}</h3>
          <span className={styles.subheader}>
            {user.maNhom}
            <br />
            {user.email}
          </span>
        </CardContent>
      ) : null}
      <Divider light />
      <Typography className={styles.subheader}>
      </Typography>
      <Typography className={styles.subheader} style={{ marginBottom: 0 }}>
        Connect With Us.
      </Typography>
      <Box display="flex" justifyContent="center">
        <IconButton
          size="small"
          component={Link}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon style={{ fontSize: "2.125rem", color:"grey" }}/>
        </IconButton>
        <IconButton
          size="small"
          component={Link}
          href="https://youtube.com/"
          target="_blank" 
          rel="noopener"
        >
          <YouTubeIcon style={{ fontSize: "2.125rem", color:"grey" }} />
        </IconButton>
      </Box>
      <Typography className={styles.subheader}>
        © Copyright 2020 Acharya Bharat.
      </Typography>
    </Card>
  );
});

export default AvatarInfo;
