import React, { useState } from 'react';
import './App.css';
import Example from './Carousel';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Restaurant1 from './componentes/restaurant1';
import Restaurant2 from './componentes/restaurant2';
import Restaurant3 from './componentes/restaurant3';
import Restaurant4 from './componentes/restaurant4';
import Restaurant5 from './componentes/restaurant5';
import Restaurant6 from './componentes/restaurant6';
import Restaurant7 from './componentes/restaurant7';
import Restaurant8 from './componentes/restaurant8';
import Restaurant9 from './componentes/restaurant9';
import Restaurant10 from './componentes/restaurant10';



function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [name3, setName3] = useState('');
  const [name4, setName4] = useState('');
  const [name5, setName5] = useState('');
  const [name6, setName6] = useState('');
  const [name7, setName7] = useState('');
  const [name8, setName8] = useState('');
  const [name9, setName9] = useState('');
  const [name10, setName10] = useState('');

  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');
  const [type3, setType3] = useState('');
  const [type4, setType4] = useState('');
  const [type5, setType5] = useState('');
  const [type6, setType6] = useState('');
  const [type7, setType7] = useState('');
  const [type8, setType8] = useState('');
  const [type9, setType9] = useState('');
  const [type10, setType10] = useState('');

  const [location1, setLocation1] = useState();
  const [location2, setLocation2] = useState();
  const [location3, setLocation3] = useState();
  const [location4, setLocation4] = useState();  
  const [location5, setLocation5] = useState();
  const [location6, setLocation6] = useState();
  const [location7, setLocation7] = useState();



  
  // router.post('/restaurants', restaurantController.newRestaurant);
  const getData1 = async () => {
    // console.log("Datos Norte");
    await fetch(
            "https://project-35d0c-default-rtdb.firebaseio.com/.json"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setName1(data["restaurant1"].name)
                setName2(data["restaurant2"].name)
                setName3(data["restaurant3"].name)
                setName4(data["restaurant4"].name)
                setName5(data["restaurant5"].name)
                setName6(data["restaurant6"].name)
                setName7(data["restaurant7"].name)
                setName8(data["restaurant8"].name)
                setName9(data["restaurant9"].name)
                setName10(data["restaurant10"].name)

                setType1(data["restaurant1"].type)
                setType2(data["restaurant2"].type)
                setType3(data["restaurant3"].type)
                setType4(data["restaurant4"].type)
                setType5(data["restaurant5"].type)
                setType6(data["restaurant6"].type)
                setType7(data["restaurant7"].type)
                setType8(data["restaurant8"].type)
                setType9(data["restaurant9"].type)
                setType10(data["restaurant10"].type)

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

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">

          <div className='ContCarousell'>
            <div className='Contenedor2'>
              <Example />
            </div>
          </div>


          <h2> Restaurant List</h2>

          <div className='ContainerRestaurants'>
            <div className='ListCont'>
              <h4>Lista</h4>
              <a href='/restaurant1'><p> Restaurant {name1}</p></a>
              <a href='/restaurant2'><p> Restaurant {name2}</p></a>
              <a href='/restaurant3'><p> Restaurant {name3}</p></a>
              <a href='/restaurant4'><p> Restaurant {name4}</p></a>
              <a href='/restaurant5'><p> Restaurant {name5}</p></a>
              <a href='/restaurant6'><p> Restaurant {name6}</p></a>
              <a href='/restaurant7'><p> Restaurant {name7}</p></a>
              <a href='/restaurant8'><p> Restaurant {name8}</p></a>
              <a href='/restaurant9'><p> Restaurant {name9}</p></a>
              <a href='/restaurant10'><p> Restaurant {name10}</p></a>

            </div>
              
            <div className='InfoCont'>
              <main>
                <Switch>
                  <Route exact path='/restaurant1' component={Restaurant1}/>
                  <Route exact path='/restaurant2' component={Restaurant2}/>
                  <Route exact path='/restaurant3' component={Restaurant3}/>
                  <Route exact path='/restaurant4' component={Restaurant4}/>
                  <Route exact path='/restaurant5' component={Restaurant5}/>
                  <Route exact path='/restaurant6' component={Restaurant6}/>
                  <Route exact path='/restaurant7' component={Restaurant7}/>
                  <Route exact path='/restaurant8' component={Restaurant8}/>
                  <Route exact path='/restaurant9' component={Restaurant9}/>
                  <Route exact path='/restaurant10' component={Restaurant10}/>

                </Switch>
              </main>
            </div>
          </div>

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
