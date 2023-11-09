import axios from 'axios';

const App = () => {
  const data = axios
                .get("/createmodel")
                .then((response) => response.data)
  console.log(data)
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App;
