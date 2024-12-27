

fetch('./data.json').then((response) => {
  if(!response.ok) {
    return console.log('Oops! Something went wrong.');
  }
  return response.json();
}).then ((data) => {
  const h3List = document.querySelectorAll('h3');
  const spanList = document.querySelectorAll('main span');
  const buttonList = document.querySelectorAll('button');

  const displayHours = (item, index) => {
    const getBtnOption = event.target.dataset.option;
    const getStateOfTime = item.dataset.timeframe;
    item.innerHTML = data[index].timeframes[getBtnOption][getStateOfTime] + 'hrs';
  }

  buttonList.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      h3List.forEach(displayHours);
      spanList.forEach(displayHours); 
    })
  })
  
});




