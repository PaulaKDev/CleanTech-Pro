/* Coverage Search Widget Module */
export function initCoverageSearch() {
  const form = document.getElementById('coverage-form');
  const input = document.getElementById('cp-input');
  const resultDiv = document.getElementById('coverage-result');

  if (!form || !input || !resultDiv) return;

  // Mock list of covered postal code prefixes (e.g. Madrid/Barcelona/Valencia regions)
  const validPrefixes = ['28', '08', '46', '41', '48', '50'];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cp = input.value.trim();

    if (!/^\d{5}$/.test(cp)) {
      resultDiv.className = 'coverage__result error';
      resultDiv.textContent = 'Por favor, ingrese un código postal válido de 5 dígitos.';
      return;
    }

    const prefix = cp.substring(0, 2);

    if (validPrefixes.includes(prefix)) {
      resultDiv.className = 'coverage__result success';
      resultDiv.textContent = `✓ ¡Excelente! Disponemos de servicio directo y retén técnico para el C.P. ${cp}.`;
    } else {
      resultDiv.className = 'coverage__result error';
      resultDiv.textContent = `Actualmente prestamos servicio en esta zona bajo consulta previa. Contáctenos directamente.`;
    }
  });
}
