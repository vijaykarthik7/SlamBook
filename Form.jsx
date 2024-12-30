import React from 'react'
import back from './src/back'
function Form() {
  return (
   <>
<back/>
   <div className="c2">
   <div className="cx">
   <fieldset>
    <legend>slam</legend>
    
    <form className="f1">
      <label >Name:</label>
      <input type="text" id="i"/><br /><br />
      <label >Nick Name:</label>
      <input type="text" id="p" /><br /><br />
      <label >Address:</label><input type="text" id="w"/><br /><br />
      <label>Phone:</label><input type="text" id="o" /><br /><br />
      <label >Memories:</label><br /><textarea name="" className="l1"></textarea><br /><br />
      <label >Gender:</label>
      <div className="c2">
      <input type="radio" />
      <label >Male</label><br />
     
      <input type="radio" />
      <label >Female</label>
      </div>
      <label>Favourite Actor</label><br />
      <div className="d1">
      <input type="Radio"/>
      <label >Thalapathy Vijay</label>
      <br />
      </div>
      <button className="b1">Sumbit</button>
      
    
    </form>
    
    
   </fieldset>
   </div>
   </div>
    
   
   </>
  )
}
export default Form