"use client";

import { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispTemplate extends Component {

  componentDidMount () {
    Crisp.configure('81aec980-36ca-475f-8bdf-d6671d45dfef');
  }
  
  render () {
    return null;
  }
}

export default CrispTemplate;