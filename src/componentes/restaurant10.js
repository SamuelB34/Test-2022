import React, { useState } from 'react';
import '../App.css';

const Restaurant10 = () => {

  return (
      <div>
        <h1 className='title'>Restaurant "T2"</h1>
        <div className='contImage'>
            <img src={require('../img/t2.jpg')} className='pic'/>
            <div className='txtCont'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit tellus, vestibulum ut cursus vel, tempus non risus. Etiam finibus malesuada efficitur. Etiam varius viverra ex, ut feugiat massa varius non. Cras lectus neque, auctor id quam vel, aliquam eleifend eros. Mauris euismod elit non ex lacinia, sed aliquet nulla auctor. Aenean aliquam elementum neque, sed faucibus est lobortis id. </p>                
             
            </div>
        </div>
        <p className='loremTxt'>
Cras vel pellentesque leo. Ut iaculis iaculis massa vitae luctus. Sed egestas dui tortor, a ultrices tellus dictum sed. Nam lobortis lacus urna, et blandit est iaculis ut. Proin quis nisl eleifend, congue metus a, vehicula mauris. Integer posuere finibus elit a placerat. Sed quis velit semper, tincidunt ipsum in, vestibulum ipsum. Maecenas scelerisque hendrerit rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam leo dui, dictum ullamcorper lectus eu, dictum placerat lacus. Nullam vel nunc accumsan, auctor libero in, aliquam massa. Sed ac nulla odio. Suspendisse dignissim, ante a egestas mollis, leo est maximus velit, non.</p>
        
      </div>

  )
}

export default Restaurant10