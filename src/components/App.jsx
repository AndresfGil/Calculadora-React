import Display from './Display'
import PanelBotones from './PanelBotones'
import {Component} from "react";
import operaciones from "./logic/operaciones"


class App extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null
  }

  handleClick = nombreBoton => this.setState(operaciones(this.state, nombreBoton))


  render() {
  return (
    <div>
      <Display value={this.state.siguiente || this.state.total || '0'} />

      <PanelBotones clickHandle={this.clickHandle} />
    </div>
  );

}
}

export default App;
