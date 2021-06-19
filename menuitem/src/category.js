import React from 'react';
import './category.css'


class category extends React.Component{

render(){
    const {category,funchandler}=this.props;
    return(
        <div className="category-wrapper">
            { category.map((i,index)=>{
          return <div className="category-items" key={index} onClick={()=>funchandler(i)}>{i}</div>
          
})}
      </div>
    );
}
}

export default category;