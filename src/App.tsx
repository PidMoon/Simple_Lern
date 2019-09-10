
import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
    const mission = 'Mission completed';

    return (
        <Router>
            {mission}
        </Router>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
