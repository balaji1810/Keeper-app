import React from "react";
import ReactDOM from "react-dom";

function Footer() {
  const currentDate = new Date();
  var date = currentDate.getFullYear();
  return (<footer><p> Copyright ⓒ {date} </p></footer>);
}

export default Footer;
