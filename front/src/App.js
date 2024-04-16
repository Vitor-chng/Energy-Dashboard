import logo from './logo.svg';
import './App.css';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import EnergyChart from './EnergyChart';

function App() {

  const mockData = 
    // quantad pessoas passam pelo onibus a cada hora do dia (comeca 0h)
    [10,0,0,0,0,40,35,200,220,190,100,70,40,50,45,60,200,220,190,70,30,20,15]
 



  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard de Energia</h1>
      </header>
      <Get url="http://localhost:3001/consumo" >
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            console.log(response.data)
            return (
              <EnergyChart
                data = {response.data}
              />)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
    </div>
  );
}

export default App;
