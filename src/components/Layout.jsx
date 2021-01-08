import React from "react";
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function Layout(props) {
  console.log("props", props);
  return (
    <div className="phone">
      <ScrollBar>
        <div className="phone-toolbar">
          <div className="phone-toolbar-microphone" />
          <div className="phone-toolbar-speaker" />
        </div>
        <div className="phone-content">{props.children}</div>
      </ScrollBar>
    </div>
  );
}

export default Layout;
