import React, { useState } from 'react';
import '../App.css';

const Restaurant6 = () => {

    const [location4, setLocation4] = useState();
    const [location5, setLocation5] = useState();
    const [location6, setLocation6] = useState();
    const [location7, setLocation7] = useState();
  
    const getData1 = async () => {
        // console.log("Datos Norte");
        await fetch(
                "https://project-35d0c-default-rtdb.firebaseio.com/.json"
            )
                .then((response) => response.json())
                .then((data) => {
                    setLocation4(data["restaurant4"].location)
                    setLocation5(data["restaurant5"].location)
                    setLocation6(data["restaurant6"].location)
                    setLocation7(data["restaurant7"].location)
                });

        };

    
        getData1();

        const distance1 = Math.abs(location6-location5)
        const distance2 = Math.abs(location6-location7)
        const distance3 = Math.abs(location6-location4)

  return (
      <div>
        <h1 className='title'>Restaurant "U"</h1>
        <div className='contImage'>
            <img src={require('../img/u.jpg')} className='pic'/>
            <div className='txtCont'>
                <p> Distance between Restaurant U and A is {distance1} km. Distance between Restaurant U and R is {distance2} km. Distance between Restaurant U and T is {distance3} km </p>
                
            </div>
        </div>
        <p className='loremTxt'>
Cras vel pellentesque leo. Ut iaculis iaculis massa vitae luctus. Sed egestas dui tortor, a ultrices tellus dictum sed. Nam lobortis lacus urna, et blandit est iaculis ut. Proin quis nisl eleifend, congue metus a, vehicula mauris. Integer posuere finibus elit a placerat. Sed quis velit semper, tincidunt ipsum in, vestibulum ipsum. Maecenas scelerisque hendrerit rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam leo dui, dictum ullamcorper lectus eu, dictum placerat lacus. Nullam vel nunc accumsan, auctor libero in, aliquam massa. Sed ac nulla odio. Suspendisse dignissim, ante a egestas mollis, leo est maximus velit, non.</p>
        
      </div>

  )
}

export default Restaurant6