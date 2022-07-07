import Navbar from "./components/Navbar";
import Travels from "./components/Travels";
import TravelData from "./components/TravelData";

const myTravels = TravelData.map((data, index) => {
  return (
    <Travels key={index} data={data}    />
  )
})


function App() {
  return (
    <div>
        <Navbar />
        {myTravels}
    </div>
  );
}

export default App;
