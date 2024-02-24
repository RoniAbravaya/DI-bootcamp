document.getElementById('cookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('cooking_name').value;
    const last_name = document.getElementById('cooking_last_name').value;
    const phone_number = document.getElementById('cooking_phone_number').value;
    const location = document.getElementById('cooking_location').value;
    const response = await fetch('/api/cooking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, last_name, phone_number, location })
    });
    if (response.ok) {
      document.getElementById('cooking_name').value = '';
      document.getElementById('cooking_last_name').value = '';
      document.getElementById('cooking_phone_number').value = '';
      document.getElementById('cooking_location').value = 'Tel Aviv';
    }
  });

  document.getElementById('helpingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('helping_name').value;
    const last_name = document.getElementById('helping_last_name').value;
    const phone_number = document.getElementById('helping_phone_number').value;
    const location = document.getElementById('helping_location').value;
    const response = await fetch('/api/helping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, last_name, phone_number, location })
    });
    if (response.ok) {
      document.getElementById('helping_name').value = '';
      document.getElementById('helping_last_name').value = '';
      document.getElementById('helping_phone_number').value = '';
      document.getElementById('helping_location').value = 'Tel Aviv';
    }
  });

  document.getElementById('packingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('packing_name').value;
    const last_name = document.getElementById('packing_last_name').value;
    const phone_number = document.getElementById('packing_phone_number').value;
    const location = document.getElementById('packing_location').value;
    const response = await fetch('/api/packing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, last_name, phone_number, location })
    });
    if (response.ok) {
      document.getElementById('packing_name').value = '';
      document.getElementById('packing_last_name').value = '';
      document.getElementById('packing_phone_number').value = '';
      document.getElementById('packing_location').value = 'Tel Aviv';
    }
  });




  document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const response = await fetch(`/api/${category}?location=${location}`);
    const data = await response.json();
    const dataContainer = document.getElementById('data');
    dataContainer.innerHTML = '';
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `
        <h2>${item.name}</h2>
        <p>Last Name: ${item.last_name}</p>
        <p>Phone Number: ${item.phone_number}</p>
        <p>Location: ${item.location}</p>
        <hr>
      `;
      dataContainer.appendChild(itemElement);
    });
  });