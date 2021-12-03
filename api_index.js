// Name: Robert Landowski
// Github Upload Date: 12/3/2021
// Resources: Followed a guide available at: https://www.freecodecamp.org/news/how-to-deploy-your-site-using-express-and-heroku/

const express = require('express');
var cors = require('cors')

 
const axios = require('axios');
const url = require('url');
var app = express()

app.use(cors())

app.use(express.json());


app.get('/', (req, res)=>{
    
    res.send('Hello World');
})

app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000'));

app.get('/api_img', (req, res) => {
    

async function img_request(req) {
    try {
    
        let result = await axios.get(`https://api.bing.microsoft.com/v7.0/images/search?q=${req.query.search}`,
         { headers: { "Ocp-Apim-Subscription-Key": req.query.key }});
        let data = result.data;
        console.log(req.query);
        console.log(data.value[0].contentUrl);
        res.send({image: data.value[0].contentUrl});
        
    } catch (error) {
        console.log(error.response);

    return error.response;
    }

   
}


img_request(req);




    
})
