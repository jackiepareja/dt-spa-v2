import React, { Component } from "react";

import "../sass/index.scss";
import "../res/styles/icon-font.css";

const acc = document.querySelectorAll("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("onClick", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



class PolicyContent extends Component {
  render() {
    return (
      <div className="PolicyContent">
        <button className="accordion">About Clients</button>
        <div className="panel">
          <ul>
            <li>Puppies need to be at least 7 months old to be part of the Dog Tales Pack.</li>
            <li>Canines must provide have up-to-date vacinnations required by California.</li>
            <li>Canines must provide documentation for continuous flea, heartworm and tick prevention medicine.</li>
            <li>Canines must be spayed or neutured for boarding services.</li>
            <li>Canines must inform us about any allergies.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PolicyContent;
