const apiKey = 'Ss0eL6RwFdbkHS1qKEq7T3BlbkFJX8P89MKTwS51hBsPuF9U';
const endpoint = 'https://api.openai.com/v1/chat/completions';

function getAI(prompt) {
const inputData = {
  messages: [{ role: "system", content: prompt}],
  max_tokens: 100,
  model: "gpt-3.5-turbo"
};

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${'sk-' + apiKey}`
  },
  body: JSON.stringify(inputData)
})
.then(response => response.json())
.then(data => {
  document.getElementById("airesponse").innerText = data.choices[0].message.content;
})
.catch(error => {
  console.error('Error:', error);
});
}

