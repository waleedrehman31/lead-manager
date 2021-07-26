import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">
              Lead Managers
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
