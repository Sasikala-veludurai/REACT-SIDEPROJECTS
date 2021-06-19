import React from "react"
import './App.css'

class menu extends React.Component{
  render(){
    const {items}=this.props;
      return(
        <div className="menu-wrapper">
       { items.map((i)=>{
          return( 
          <div className="menus">
          <img className="image" src={i.img} key={i.id} />
          <div >
            <div className="title">{i.title}</div>
            <div className="price"> $ {i.price}</div>
           </div> 
           </div>
         ) })}
    </div>
      );
  }

}

export default menu;