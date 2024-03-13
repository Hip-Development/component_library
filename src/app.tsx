import { Table } from "./components/table";
import { SlideButton, Button } from "./components";
import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <SlideButton />
      <Button>Button</Button>
      <Table
        caption="Some text"
        headings={["a", "b"]}
        rows={[["1", "2", "3", "4"]]}
        footers={["d", "e"]}
      ></Table>
    </div>
  );
}

export default App;
