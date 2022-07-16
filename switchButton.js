//Executing the function code as soon as the window loads
let options = [
  "Increase the number of customers",
  "Increase average transaction value",
  "Increase the frequency of purchases",
];

//Running the event
window.addEventListener("load", () => {
  //Creating the main popup element here and appening the popup class on it
  let mainPopup = document.createElement("div");
  mainPopup.classList.add("option-popup");

  //Loops through the options array to create options menu
  for (let i = 0; i < options.length; i++) {
    //Creating the options container element here which contains the label and the switch
    let optionContainer = document.createElement("div");
    optionContainer.classList.add("option-container");
    //Label Container
    let optionLabel = document.createElement("div");
    optionLabel.classList.add("option-label");
    //Label Element that has the text
    let labelHeading = document.createElement("span");
    labelHeading.classList.add("label-heading");
    //Assigning the text from the array "options"
    labelHeading.textContent = options[i];
    //Appending these two elements
    optionLabel.appendChild(labelHeading);
    //Appending the label container in the option container
    optionContainer.appendChild(optionLabel);

    //Option Switch Container
    let optionSwitch = document.createElement("div");
    optionSwitch.classList.add("option-switch");
    //Creating input and it's label
    let switchLabel = document.createElement("label");
    let switchInput = document.createElement("input");
    //Assigning an id to the Input element corresponding to the checkbox for example it would be 'checkbox-1'
    switchInput.setAttribute("id", `checkbox-${i + 1}`);
    //Assigning the type of input to 'checkbox'
    switchInput.type = "checkbox";
    //Adding class to the switch
    switchInput.classList.add("switch");
    //Adding an for label attribute
    switchLabel.setAttribute("for", `checkbox-${i + 1}`);
    //Appending input and it's label in the switch container
    optionSwitch.appendChild(switchInput);
    optionSwitch.appendChild(switchLabel);
    //Appending the switch container in the options container
    optionContainer.appendChild(optionSwitch);
    //Appending the main container in the popup container
    mainPopup.appendChild(optionContainer);
  }
  //Appending the main final popup in the body
  document.body.appendChild(mainPopup);
});
