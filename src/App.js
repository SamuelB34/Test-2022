import React, { useState } from 'react';
import './App.css';
import Example from './Carousel';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './componentes/layout/Header';
import LoggedOut from './LoggedOut';
import Info from './Info';

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
            });
    };

    getData1(); 


    const [loggedIn, setLoggedIn ] = useState(true)

    const postive=()=>{
      loggedIn(false)
    }
    
  return (
    <BrowserRouter>
      <div className="App">
        <Header 
          setLoggedIn={setLoggedIn}
          loggedIn = {loggedIn}
        />
        <header className="App-header">

        {loggedIn?
          <div>
            <div className='ContCarousell'>
          <div className='Contenedor2'>
              <Example 
              />
            </div>
          </div>


          <h2> Restaurant List</h2>

          <div className='ContainerRestaurants'>
            <div className='ListCont'>
              <h4 className='listTitle'>List</h4>
              <a href='/restaurant1' onClick={postive}><p> Restaurant {name1}</p></a>
              <a href='/restaurant2' onClick={postive}><p> Restaurant {name2}</p></a>
              <a href='/restaurant3' onClick={postive}><p> Restaurant {name3}</p></a>
              <a href='/restaurant4' onClick={postive}><p> Restaurant {name4}</p></a>
              <a href='/restaurant5' onClick={postive}><p> Restaurant {name5}</p></a>
              <a href='/restaurant6' onClick={postive}><p> Restaurant {name6}</p></a>
              <a href='/restaurant7' onClick={postive}><p> Restaurant {name7}</p></a>
              <a href='/restaurant8' onClick={postive}><p> Restaurant {name8}</p></a>
              <a href='/restaurant9' onClick={postive}><p> Restaurant {name9}</p></a>
              <a href='/restaurant10' onClick={postive}><p> Restaurant {name10}</p></a>
            </div>
              
            <div className='InfoCont'>
              <main id='info'>
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

          </div>

        : 
        <div>        
          <LoggedOut />
        </div>

        }
          

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
