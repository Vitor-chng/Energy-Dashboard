import logo from './logo.svg';
import './App.css';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import EnergyChart from './EnergyChart';

function App() {
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
