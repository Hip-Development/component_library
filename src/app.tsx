import { Button } from "./components/button";
import { SlideButton } from "./components/slide-button";
import { Table } from "./components/table";
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
