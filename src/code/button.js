const buttonTypes =
`<option value="0">Filled</option>
<option value="1">Elevated</option>
<option value="2">Filled tonal</option>
<option value="3">Outlined</option>
<option value="4">Text</option>
<option value="5">Icon</option>
<option value="6">FAB</option>
<option value="7">Extended FAB</option>
`;

const buttonHTML = 
`
  <button class="material" data-style-type="{1}" data-icon="{2}">Your text here</button>
`;
/* <button class="material" data-style-type="filled" data-icon="true" style="--color-primary: #6850a3; --color-on-primary: #FFFFFF; --color-secondary: #625B71;">
        <i class="icon"></i>
        Filled
      </button> */
const buttonStyle = 
`
button.material {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;

  i.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 300ms cubic-bezier(0.2, 0, 0, 1);
    background-color: color-mix(in srgb, var(--color-on-primary), transparent 90%);
  }
}

button.material[data-icon="true"] {

  padding-left: 1rem;
  gap: 0.5rem;

  i.icon {
    display: block;
    height: 1.125rem;
    width: 1.125rem;
    background-color: var(--color-on-primary);
  }
}

@keyframes ripple {
  to {
    transform: scale(1);
    opacity: 0;
  }
}

{1}
`;

const buttonStyleTypes = [
  `button.material[data-style-type="filled"] {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    transition: box-shadow, background-color 150ms cubic-bezier(0.2, 0, 0, 1);
  }
  
  button.material:disabled[data-style-type="filled"] {
    background-color: color-mix(in srgb, var(--color-on-primary), transparent 88%);
    color: color-mix(in srgb, var(--color-on-primary), transparent 62%);
  
    i.icon {
      background-color: color-mix(in srgb, var(--color-on-primary), transparent 62%);
    }
  }
  
  button.material:hover[data-style-type="filled"] {
    box-shadow: rgba(0, 0, 250, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    background-color: color-mix(in srgb, var(--color-primary), var(--color-on-primary) 8%);
  }
  
  button.material:focus-visible[data-style-type="filled"] {
    box-shadow: none;
    outline-color: var(--color-secondary);
    background-color: color-mix(in srgb, var(--color-primary), var(--color-on-primary) 10%);
  }
  
  button.material:active[data-style-type="filled"] {
    box-shadow: none;
    background-color: color-mix(in srgb, var(--color-primary), var(--color-on-primary) 10%);
  }
  `
];

const buttonJS = 
`// Only for the ripple effect
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement('i');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = \`\${diameter}px\`;
  circle.style.left = \`\${event.clientX - button.offsetLeft - radius}px\`;
  circle.style.top = \`\${event.clientY - button.offsetTop - radius}px\`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.querySelectorAll('button.material');

for (const button of buttons) {
  button.addEventListener('click', createRipple);
} 
`;


function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement('i');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

// const buttons = document.querySelectorAll('button.material');

// for (const button of buttons) {
//   button.addEventListener('click', createRipple);
// }
