import React, { Component } from "react";
import { Table } from "semantic-ui-react";

function annot_table(sym, sym_num) {
  const newformat = sym[sym_num];

  return newformat;
}

function handleClick(e) {
  const vallist = [];
  vallist.push(e.target.text);
  e.preventDefault();

  console.log(vallist);
}
export default class MakeTable extends Component {
  //  const { autoData } = this.state;
  // const fordAutos = autoData.filter( (auto) => auto.title.includes("Ford"));

  constructor(props) {
    super(props);

    this.state = {
      props
      //states
    };
  }
  chartRef = React.createRef();

  componentDidMount() {
    const api_link = this.props;
    console.log(this.props);
  }
  render() {
    const testprops = this.props.sym;
    console.log(testprops);
    return (
      <>
        <div style={{ overflowY: "scroll" }}>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>id</Table.HeaderCell>
                <Table.HeaderCell>sym</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.gene.map((val, index) => (
                <Table.Row>
                  <Table.Cell>
                    {" "}
                    <a href="#" onClick={handleClick}>
                      {val}
                    </a>{" "}
                  </Table.Cell>
                  <Table.Cell> {annot_table(testprops, index)} </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </>
    );
  }
}
