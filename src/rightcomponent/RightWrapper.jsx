

 import BoxItem from '../boxcomponent/BoxItem';
 
import './RightWrapper.css'

import dot from '../assets/icon-ellipsis.svg';

import Work from '../assets/icon-work.svg';
import PLAY from '../assets/icon-play.svg';
import STUDY from '../assets/icon-study.svg';
import exercise from '../assets/icon-exercise.svg';
import social from '../assets/icon-social.svg';
import selfcare from '../assets/icon-self-care.svg';
const RightWrapper = () => {

const arr = [

{
  SelectWork : "work",
  SelectLogo : dot,
  SelectImg : Work,
  SelectBg : "hsl(15, 100%, 70%)",
  SelectHour : "32hrs",
  Select : "lastweek-36hrs",
  uniqueId : 1
},

{
  SelectWork : "play",
  SelectLogo : dot,
  SelectImg : PLAY,
  SelectBg : "hsl(195, 74%, 62%)",
  SelectHour : "10hrs",
  Select : "lastweek-8hrs",
  uniqueId : 2
},

{
  SelectWork : "study",
  SelectLogo : dot,
  SelectImg : STUDY,
  SelectBg : "hsl(348, 100%, 68%)",
  SelectHour : "4hrs",
  Select : "lastweek-7hrs",
  uniqueId : 3
},


{
  SelectWork : "study",
  SelectLogo : dot,
  SelectImg : social,
  SelectBg : "hsl(145, 58%, 55%)",
  SelectHour : "4hrs",
  Select : "lastweek-5hrs",
  uniqueId : 4
},


{
  SelectWork : "exercise",
  SelectLogo : dot,
  SelectImg : exercise,
  SelectBg : "hsl(264, 64%, 52%)",
  SelectHour : "5hrs",
  Select : "lastweek-10hrs",
  uniqueId : 5
},

{
  SelectWork : "selfcare",
  SelectLogo : dot,
  SelectImg : selfcare,
  SelectBg : "hsl(43, 84%, 65%)",
  SelectHour : "2hrs",
  Select : "lastweek-2hrs",
  uniqueId : 6
},










]









  return (
    
    <div className="rightwrapperdiv">

<div className='allitem'>

{

arr.map(((item) => {
  
return(

  <BoxItem SelectionWork={item.SelectWork} SelectionLogo={item.SelectLogo}
  SelectionImg={item.SelectImg} SelectionBg={item.SelectBg}
  SelectionHour={item.SelectHour} Selection={item.Select} key={item.uniqueId}
  />

)

}))




}










</div>
    </div>
  
  );
}

export default RightWrapper;







