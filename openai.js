const apiKey = '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';
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
    'Authorization': `Bearer ${apiKey}`
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

