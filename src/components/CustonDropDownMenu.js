import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import history from "./history";

class CustomDropDownMenu extends Component {
  state = {};
  render() {
    return (
      <div className="dropdown">
        <MenuIcon className="dropdown" />
        <div className="dropdown-content">
          <MenuItem>
            <div className="container">
              <div className="row">
                <div className="col">
                  <ListItemIcon
                    className="list-item-icon"
                    onClick={() => {
                      //history.push("/contact-register");
                    }}
                  >
                    <ListItemText className="list-item-text">
                      New Contact
                    </ListItemText>
                  </ListItemIcon>
                </div>
              </div>
            </div>
          </MenuItem>
        </div>
      </div>
    );
  }
}

export default CustomDropDownMenu;
