  
import axios from 'axios';

export const GoogleSearch = async (term) => {
  const { data } = await axios.get(
    'https://www.googleapis.com/customsearch/v1',
    {
      params: {
        key: process.env.React_App_Google_Api_Key,
        cx: process.env.React_App_Search_Engine_Id,
        q: term,
      },
    }
  );

  return data;
};




// //search API
// const fetch = require("node-fetch");

// // app key are for my personal account
// //Google app key 
// const googleSecret = "AIzaSyCB-X8PwkNc9VFb1CC6MAu22hykjgbSmvk"; 

// //GPT app key
// const gptSecret = "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"; 

// //chat GPT
// const config = new Configuration({ apiKey: gptSecret });
// const openai = new OpenAIApi(config);

// function gpt (searchPrompt){

//     const response = openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: searchPrompt,
//         temperature: 0,
//         max_tokens: 1000, 
//       });
    
//       // can be change into return statment as needed
//       response.then(res => {
//         //console.log(res);
//         //console.log(res.data.choices[0].text);
//       });
// }



// youtube 
// const youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${googleSecret}`;
    
// async function youtube (searchPrompt, videoNum){
//     const url1 = `${youtubeURL}&type=video&part=snippet&q=${searchPrompt}&maxResults=${videoNum}`;
    
//     const response1 =  await fetch(url1);
//     const data = await response1.json();
//     //can be change into return statment as needed
//     //console.log(data);

// }

// //google
// // cx code my ID for costome search API . 
// const googleURL = `https://www.googleapis.com/customsearch/v1?key=${googleSecret}&cx=26f7a2e0f129f447d`;
    
// async function googlsearch (searchPrompt){
//     const url1 = `${googleURL}&q=${searchPrompt}`;
    
//     const response1 =  await fetch(url1);
//     const data = await response1.json();
//     //can be change into return statment as needed
//     //console.log(data);

// }