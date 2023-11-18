import classes from "./StartingPage.module.css";
import Button from "@mui/material/Button";
import logo from "../images/logo1.png";
import cover from "../images/money-stress.png";

function StartingPage() {
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <div className={classes.logo}>
          <h1>ShopBalance</h1>
          <img src={logo} alt="ShopBalance Logo" />
        </div>
        <h2> Track and </h2>
        <p>
          Effortlessly monitor your customers' debts, adeptly oversee your
          finances, and proactively achieve your financial milestones with
          ShopBalance. It's the indispensable tool that transforms financial
          management into a seamless, goal-oriented experience.
        </p>
        <Button variant="contained" color="secondary">
          Get Started
        </Button>

        {/* right side of the page */}
      </div>
      <div className={classes.wrapper}>
        <img src={cover} alt="/" className={classes.img} />
      </div>
    </div>
  );
}

export default StartingPage;
