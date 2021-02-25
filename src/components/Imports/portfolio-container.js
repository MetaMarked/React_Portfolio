import React, { Component } from "react";

import PortfolioItem from "./Portfolio-Item";


export default class PortfolioContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      pageTitle: "This is my portfolio",
      isLoading: false ,
      data: [ 
        {title: "F.A Winners", category: "Magic"},
        {title:"F.A Mach", category: "Monster"}, 
        {title:"F.A Stadium", category: "Magic"}
      ]

    };

    this.handleFilter = this.handleFilter.bind(this);

   // this.pageTitleUpdate=this.pageTitleUpdate.bind(this) For Click Handler (UPDATES TITLES)
   // console.log("The import render is successful");
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })

  }

  
  portfolioItems() {
    //const data = [ "F.A Winners","F.A Mach", "F.A Stadium"];

    return this.state.data.map(item =>  {
      return <PortfolioItem title={item.title} url="www.google.com"/>;
    })
  }

  //pageTitleUpdate() { FOR CLICK HANDLER UPDATES TITLES
   // this.setState({
    //  pageTitle: "Updated Title"
   // });
 // }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return ( 
      <div>
      <h2>{this.state.pageTitle}</h2>
        <button onClick={() => this.handleFilter("Monster")}>Monster</button>

        <button onClick={() => this.handleFilter("Magic")}>Magic</button>
        {this.portfolioItems()}
        
      
      </div>
    )
  }
}