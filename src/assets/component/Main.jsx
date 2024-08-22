import React from 'react';
import VideoBg from '../component/VideoBg.mp4'
const Main = () => {
return (
<div className='main'> 
<div className='overlay'>
</div>
 <video src={VideoBg} autoPlay loop muted/> 
     <div className='content'>
        <h1>Welcome to helloei React tutorial</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur alias perferendis maxime distinctio possimus quod rerum veniam </p>
        <p>Consectetur alias perferendis maxime distinctio pos</p>
        <button>start course</button>
     </div>
</div>

)

}

export default Main