import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Alert />
      <div>
        <ListGroup
          items={cities}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
