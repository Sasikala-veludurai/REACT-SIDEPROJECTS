import item from './data';
import './App.css';

import Category from './category';
import Menu from "./menu";
import { useState } from 'react';
const allcat=['all',...new Set(item.map(i=>{return i.category}))];


function App() {
  const [cat,setCat]=useState(allcat);
    const [menu,setMenu]=useState(item);
  
    function funchandler(passvalue){
    if(passvalue=='all') {
      setMenu(item);
    }
    else{
    const res=item.filter(i=>{
         return i.category==passvalue;
        })
 
        setMenu(res);
      }  
 }
  return (
   <div className="app-wrapper">
     <section className="heading-wrapper">
         <h1>Our Menu</h1>
         <div className="underline"></div>
     </section >
     <section className="content-wrapper">
      
           <Category category={cat} funchandler={funchandler}/>
            <Menu items={menu}/> 
     </section>
   </div>
  );
}

export default App;
