import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "40vw",
    margin: "30vh auto 5vh auto",
    [theme.breakpoints.down("sm")]: {
      margin: "8vh auto 5vh auto",
      width: "100vw",
    },
  },
  FormItem: {
    width: "100%",
  },
  Paper: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "fit-content",
    minHeight: "5vh",
    margin: "3vh",
    width: "40vw",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "39.28vh",
      minWidth: "39.28vh",
      width: "39.28vh",
    },
  },
  Button: {
    fontFamily: ["Mulish", "sans-serif"].join(","),
    textTransform: "none",
    top: "5vh",
    marginBottom: "5vh",
    height: "5vh",
  },
}));

export default useStyles;
