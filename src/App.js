import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { StudentDataContextProvider } from "./context/StudentDataContext";
import { AssignmentContextProvider } from "./context/AssignmentContext";
import { AssignmentNamesContextProvider } from "./context/AssignmentNamesContext";
import { AssignmentShortNamesContextProvider } from "./context/AssignmentShortNamesContext";

import Header from "./components/Header";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavbarStudents from "./components/NavbarStudents";
import ChartGeneralComponent from "./components/ChartGeneralComponent";
import ChartAssignmentComponent from "./components/ChartAssignmentComponent";
import ChartStudentsComponent from "./components/ChartStudentsComponent";


function App() {

  useEffect(() => {
    document.title = 'Student Dashboard made by Johan'
  })
  return (
    <Router>
      <StudentDataContextProvider>
        <AssignmentNamesContextProvider>
          <AssignmentContextProvider>
            <AssignmentShortNamesContextProvider>
              <Header />
              <Navbar />
              <NavbarStudents />
              <Switch>
                <Route exact path="/table">
                  <Table />
                </Route>
                <Route exact path="/">
                  <ChartGeneralComponent />
                </Route>
                <Route exact path="/opdrachten">
                  <ChartAssignmentComponent />
                </Route>
                <Route exact path="/:id">
                  <ChartStudentsComponent />
                </Route>
              </Switch>
              <Footer />
            </AssignmentShortNamesContextProvider>
          </AssignmentContextProvider>
        </AssignmentNamesContextProvider>
      </StudentDataContextProvider>
    </Router>
  );
};

export default App;
