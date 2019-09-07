
import * as React from 'react';
import ReactDOM from 'react-dom';


function App() {
    const mission = 'Mission completed';

    return (
        <h1>
            {mission}
        </h1>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
