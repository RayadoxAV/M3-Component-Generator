const componentSelect = document.getElementById('component-select');
const typeSelect = document.getElementById('type-select');
const generateButton = document.getElementById('generate-button');
const previewContainer = document.getElementById('preview');

const htmlContainer = document.getElementById('html-pre');
const cssContainer = document.getElementById('css-pre');
const jsContainer = document.getElementById('js-pre');



const inputTypes = ``;
const chipTypes = ``;
const navRailTypes = ``;

function main() {
  componentSelect.addEventListener('change', (event) => changeComponent(event.target.value));
  generateButton.addEventListener('click', () => generateComponent());
}
main();

function changeComponent(value) {
  if (value !== '') {
    showTypes(value);
  }
}

function showTypes(component) {
  switch (component) {
    case '0':
      typeSelect.innerHTML = `<option value="">Select a type</option>${buttonTypes}`;
      break;

    default:
      console.log('Does not have types');
      break;
  }
}


function getColors() {
  const colorInputs = document.querySelectorAll('input[type="color"]');

  const colors = [];

  for (let i = 0; i < colorInputs.length; i++) {
    const input = colorInputs.item(i);
    colors.push(input.value); 
  }

  return colors;
}

function generateComponent() {
  if (componentSelect.value === '') {
    return;
  }
  const colors = getColors();

  switch (componentSelect.value) {
    case '0':
      generateButtonComponent(typeSelect.value, colors);
      break;

    default:
      console.log('Not implemented yed');
      break;
  }
}

function generateButtonComponent(type, colors) {
  let buttonType = '';
 
  switch (type) {
    case '0': 
      buttonType = 'filled';
      break;

    default:
      buttonType = 'filled';
      break;
  }

  const button = document.createElement('button');
  button.classList.add('material');
  button.setAttribute('data-style-type', buttonType);
  button.setAttribute('data-icon', false);
  button.innerText = 'Your text here';

  button.style.setProperty('--color-primary', colors[0]);
  button.style.setProperty('--color-on-primary', colors[1]);
  button.style.setProperty('--color-secondary', colors[1]);

  button.addEventListener('click', createRipple);

  loadPreview(button);
  loadCode('0', type);
}

function loadPreview(element) {
  if (previewContainer.childElementCount > 0) {
    for (let i = 0; i < previewContainer.children.length; i++) {
      const child = previewContainer.childNodes.item(i);
      child.remove();
    }
  }
  previewContainer.appendChild(element);

}

function loadCode(component, type) {
  console.log(component, type);


  let html = '';
  let css = '';
  let js = '';

  switch (component) {
    case '0':
      html = buttonHTML;
      css = buttonStyle.replace('{1}', buttonStyleTypes[Number.parseInt(type)]);
      js = buttonJS;
      break;

    default:
      break;
  }


  htmlContainer.innerText = html;
  cssContainer.innerText = css;
  jsContainer.innerText = js;
}