import React, { useState } from 'react';
import '../App.css';

const Restaurant4 = () => {
    const [location1, setLocation1] = useState();
    const [location2, setLocation2] = useState();
    const [location3, setLocation3] = useState();
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
                    setLocation1(data["restaurant1"].location)
                    setLocation2(data["restaurant2"].location)
                    setLocation3(data["restaurant3"].location)
                    setLocation4(data["restaurant4"].location)
                    setLocation5(data["restaurant5"].location)
                    setLocation6(data["restaurant6"].location)
                    setLocation7(data["restaurant7"].location)
                });

        };

    
        getData1();

        const distance1 = Math.abs(location4-location3)
        const distance2 = Math.abs(location4-location5)
        const distance3 = Math.abs(location4-location6)

  return (
      <div>
        <h1 className='title'>Restaurant "T"</h1>
        <div className='contImage'>
            <img src={require('../img/t.jpg')} className='pic'/>
            <div className='txtCont'>
                <p> Distance between Restaurant T and S is {distance1} km. Distance between Restaurant T and A is {distance2} km. Distance between Restaurant T and U is {distance3} km </p>
                
            </div>
        </div>
        <p className='loremTxt'>
Cras vel pellentesque leo. Ut iaculis iaculis massa vitae luctus. Sed egestas dui tortor, a ultrices tellus dictum sed. Nam lobortis lacus urna, et blandit est iaculis ut. Proin quis nisl eleifend, congue metus a, vehicula mauris. Integer posuere finibus elit a placerat. Sed quis velit semper, tincidunt ipsum in, vestibulum ipsum. Maecenas scelerisque hendrerit rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam leo dui, dictum ullamcorper lectus eu, dictum placerat lacus. Nullam vel nunc accumsan, auctor libero in, aliquam massa. Sed ac nulla odio. Suspendisse dignissim, ante a egestas mollis, leo est maximus velit, non.</p>
        
      </div>

  )
}

export default Restaurant4