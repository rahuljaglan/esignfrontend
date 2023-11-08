import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PdfUploadAndPreview from './components/pdf/PdfUploadAndPreview';
import CreateEsignRequest from './components/esign/CreateEsignRequest';
import DisplayEsignData from './components/esign/DisplayEsignData';
// import PdfContextProvider from './PdfContext'; // You will need to create this context

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/upload" exact component={PdfUploadAndPreview} />
          <Route path="/create-esign" exact component={CreateEsignRequest} />
          <Route path="/display-esign" exact component={DisplayEsignData} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
