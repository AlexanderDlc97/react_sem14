// import Titulo from "./Titulo";
import Card, {CardBody} from "./components/Card";
import List from "./components/List";
function App()
{
  // return <Titulo></Titulo>
  const list = ["Goku", "Vegeta", "Krilin", "Picolo"];
  return <Card>
    <CardBody title="Hola Mundo" text="Este es el texto"/>
    <List data={list} />
  </Card>
}

export default App;