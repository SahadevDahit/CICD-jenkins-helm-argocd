const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello Devops Sucessfully deployed cicd pipeline with argocd helm and jenkins !!!!:)'
    });


});

app.get('/api', () => {
    res.json({
        message: 'this for the api server'
    });
})

const port = process.env.PORT || 4000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});