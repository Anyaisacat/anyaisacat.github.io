const apiKeyDS = '5ed7a6debec3453c868df4ff7fdc588e';
const endpointDS = 'https://api.deepseek.com/v1';

function getDS(prompt) {
const inputData = {
  messages: [{ role: "system", content: prompt}],
  max_tokens: 100,
  model: "model='deepseek-chat'"
};

fetch(endpointDS, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${'sk-' + apiKeyDS}`
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
