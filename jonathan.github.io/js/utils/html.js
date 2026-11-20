const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ESCAPES[c]);

class SafeHtml {
  constructor(value) {
    this.value = value;
  }
}

const toText = (value) => {
  if (value instanceof SafeHtml) return value.value;
  if (Array.isArray(value)) return value.map(toText).join('');
  return escape(value);
};

export function html(strings, ...values) {
  const out = strings.reduce(
    (text, chunk, i) => text + chunk + (i < values.length ? toText(values[i]) : ''),
    ''
  );
  return new SafeHtml(out);
}

export function render(element, safeHtml) {
  if (!(safeHtml instanceof SafeHtml)) throw new TypeError('render() only accepts html`` output');
  element.innerHTML = safeHtml.value;
}
