/* eslint-disable react/prop-types */

import './BoxItem.css'

// import work from "../assets/icon-work.svg";

// import dot from "../assets/icon-ellipsis.svg";
const BoxItem = (props) => {
  return (
    <div className='boxitem'>
    
 <div className='box'>
  <div className='card' style={{backgroundColor:props.SelectionBg}}>
  <img src={props.SelectionImg} />
  </div>


<div className='infocard'>

<div className='info'>
<p>{props.SelectionWork}</p>
<img className='img' src={props.SelectionLogo}/>
</div>

<div className='time'>
  <p className='hour'>{props.SelectionHour}</p>
  <p className='week'>{props.Selection}</p>
</div>

</div>


</div> 










    </div>
  );
}

export default BoxItem;





