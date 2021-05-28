import { StrictMode } from "react";
import ReactDOM from "react-dom";
import BoxPlot from "./Test2";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MakeTable from "./Table";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import "./styles.css";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Title from "./Title";
import Footer from "./Footer";
import Intro from "./Intro";
import TopMenu from "./Menu";
import { Autocomplete } from "@material-ui/lab";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const rootElement = document.getElementById("root");

function App() {
  const [input, setInput] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [geneData, setgeneData] = useState([]);
  const [filteredgeneData, setFilteredgeneData] = useState([]);

  const [expData, setexpData] = useState([]);
  const [filteredexpData, setFilteredexpData] = useState([]);

  //setid
  const [asymData, setasymData] = useState([]);
  const [filteredasymData, setFilteredasymData] = useState([]);
  //aidData,asymData
  const [aidData, setaidData] = useState([]);
  const [filteredaidData, setFilteredaidData] = useState([]);
  const [mergeData, setmergeData] = useState([]);
  useEffect(() => {
    axios("http://127.0.0.1:8000/FileData/")
      .then((response) => {
        setAllData(response.data.results);
        setFilteredData(response.data.results);
        setgeneData(response.data.results[0].Read_csv3[0]);
        setFilteredgeneData(response.data.results[0].Read_csv3[0]);
        setexpData(response.data.results);
        setFilteredexpData(response.data.results);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });

    axios("http://127.0.0.1:8000/Annot/").then((response) => {
      setasymData(response.data.results[0].Sym_Description[0]);
      setaidData(response.data.results[0].Gene_DBidentifier[0]);
    });
  }, [!allData]);

  const handleSearch = (event) => {
    let value = event.target.value.toUpperCase().split(",");
    let result = [],
      result2 = [],
      exp = [],
      horname = [];
    result = value.map((item, index) =>
      geneData.filter((data) => {
        return data.search(item) != -1;
      })
    );

    result2 = value.map((item, index) => geneData.indexOf(item));
    exp = result2.map((dataon) =>
      expData.map((test) => {
        return test.Read_csv[dataon];
      })
    );
    horname = allData.map((test) => {
      return test.hormone_name;
    });

    // result = geneData.filter((data) => {

    // return data.search(value) != -1;
    //});

    setFilteredgeneData(result);
    setFilteredexpData(exp);
    setFilteredData(horname);
  };
  const styles = {
    display: "inline",
    width: "110%",
    height: 50,
    float: "left",
    padding: 5,
    border: "0.5px solid black",
    marginBottom: 10,
    marginRight: 10
  };
  const handleSubmit = (e) => {
    // 페이지 리로딩 방지
    // 상태값을 onCreate 를 통하여 부모에게 전달
    // 상태 초기화

    let value = input;

    let annot = [],
      annot2 = [],
      aid_sym = [],
      aid2 = [];
    annot = value.map((item, index) =>
      asymData.filter((data) => {
        return data.search(item) != -1;
      })
    );

    annot2 = annot[0].map((item, index) => {
      return asymData.indexOf(item);
    });
    console.log(annot);
    aid_sym = annot2.map((dataon) => {
      return asymData[dataon];
    });
    aid2 = annot2.map((dataon) => {
      return aidData[dataon];
    });

    setFilteredasymData(aid_sym);
    setFilteredaidData(aid2);

    e.preventDefault();
  };

  const onTagsChange = (event, values) => {
    debugger;
    setInput(values);
  };
  const handler = (e) => {
    console.log(input);
    // 페이지 리로딩 방지
    // 상태값을 onCreate 를 통하여 부모에게 전달
    // 상태 초기화

    let value = input;
    let result = [],
      result2 = [],
      exp = [],
      horname = [];
    result = value.map((item, index) =>
      geneData.filter((data) => {
        return data.search(item) != -1;
      })
    );

    result2 = value.map((item, index) => geneData.indexOf(item));
    exp = result2.map((dataon) =>
      expData.map((test) => {
        return test.Read_csv[dataon];
      })
    );
    horname = allData.map((test) => {
      return test.hormone_name;
    });
    // result = geneData.filter((data) => {

    // return data.search(value) != -1;
    //});

    let annot = [],
      annot2 = [],
      aid_sym = [],
      aid2 = [];
    annot = value.map((item, index) =>
      aidData.filter((data) => {
        return data.search(item) != -1;
      })
    );
    //aidData,asymData
    annot2 = annot.map((item, index) => {
      return aidData.indexOf(item[0]);
    });

    aid_sym = annot2.map((dataon) => {
      return asymData[dataon];
    });
    aid2 = annot2.map((dataon) => {
      return aidData[dataon];
    });

    /*
     annot = value.map((item, index) =>
      asymData.filter((data) => {
        return data.search(item) != -1;
      })
    );

    annot2 = annot[0].map((item, index) => {
      return asymData.indexOf(item);
    });
    aid_sym = annot2.map((dataon) => {
      return asymData[dataon];
    });
    aid2 = annot2.map((dataon) => {
      return aidData[dataon];
    });
    
    
    
    */
    console.log(annot);
    console.log(annot2);
    setFilteredgeneData(result);
    setFilteredexpData(exp);
    setFilteredData(horname);

    setFilteredasymData(aid_sym);
    setFilteredaidData(aid2);
    e.preventDefault();
  };

  return (
    <>
      <BrowserRouter>
        <Container>
          <Title />
          &nbsp;
          <Input type="button" value="Search symbol" onClick={handleSubmit} />
          &nbsp;
          <Input type="button" value="validate input" onClick={handler} />,
          <Autocomplete
            multiple
            freeSolo
            options={geneData}
            onChange={onTagsChange}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Keywords"
                placeholder="Add keywords"
                margin="normal"
                fullWidth
              />
            )}
            ListboxProps={{
              style: {
                maxHeight: "100px",
                border: "1px solid red"
              }
            }}
          />
          <TopMenu />
          <Switch>
            <Route exact path="/" component={Intro} />

            <Route exact path="/Home" component={Intro} />

            <Route
              exact
              path="/BoxPlot"
              render={(props) => (
                <BoxPlot
                  value={filteredexpData}
                  genename={filteredgeneData}
                  horname={filteredData}
                />
              )}
            />
            <Route
              exact
              path="/Table"
              render={(props) => (
                <MakeTable gene={filteredaidData} sym={filteredasymData} />
              )}
            />
          </Switch>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, rootElement);
