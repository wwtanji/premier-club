const ART_SELECTOR = '.marquee';
const BUTTON_SELECTOR = '[data-lights]';
const DARK_CLASS = 'is-dark';
const LABEL_OFF = 'Zhasnúť svetlá';
const LABEL_ON = 'Rozsvietiť svetlá';
const LIGHTS_ON_DELAY_MS = 700;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const art = document.querySelector(ART_SELECTOR);
const button = document.querySelector(BUTTON_SELECTOR);

function setDark(dark) {
  art.classList.toggle(DARK_CLASS, dark);
  button.setAttribute('aria-pressed', String(dark));
  button.textContent = dark ? LABEL_ON : LABEL_OFF;
}

button.addEventListener('click', () => setDark(!art.classList.contains(DARK_CLASS)));

if (!matchMedia(REDUCED_MOTION_QUERY).matches) {
  setDark(true);
  setTimeout(() => setDark(false), LIGHTS_ON_DELAY_MS);
}
