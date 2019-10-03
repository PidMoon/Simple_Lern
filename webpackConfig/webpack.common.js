const path = require('path');

module.exports = {
    entry: './src/App.tsx',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js'
    }
}