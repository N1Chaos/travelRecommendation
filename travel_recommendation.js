

function searchTravel() {
    const input = document.getElementById('travelInput').value.toLowerCase();
    const resultDiv = document.getElementById('travelInput');
    resultDiv.innerHTML = '';
   
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);
        if (condition) {
          const beach = condition.beach.join(', ');
          const temple = condition.temple.join(', ');
          const country = condition.country;
          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;
          resultDiv.innerHTML += `<p><strong>Beach:</strong> ${beach}</p>`;
          resultDiv.innerHTML += `<p><strong>Temple:</strong> ${temple}</p>`;
          resultDiv.innerHTML += `<p><strong>Country:</strong> ${country}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
   
