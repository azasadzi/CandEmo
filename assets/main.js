var infoBox = () => {
    alert("Product info coming soon!");
}

var infoBox2 = () => {
    console.log("alkbfejk")
  const newDiv = document.createElement('div');
  newDiv.id = 'info-box';
  newDiv.style.backgroundColor = 'white';
  newDiv.style.height = '100px';
  newDiv.style.width = '200px';
  newDiv.style.border = '2px solid black';
  newDiv.style.borderRadius = '5px';
  newDiv.style.position = 'absolute';
  newDiv.style.textAlign = 'center';
  newDiv.style.padding = '10px';
  newDiv.innerHTML = 'Product Info Coming Soon!';
  newDiv.style.marginLeft = 'calc(50% - 100px)';
  newDiv.style.marginTop = '200px';
  newDiv.style.zIndex = '900';
  document.body.append(newDiv);
};
