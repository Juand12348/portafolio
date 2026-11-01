// Meses en New Jahs contando junio de 2026 como el primero, para que no quede desactualizado.
export function mesesDesdeJunio2026(hoy = new Date()) {
  return (hoy.getFullYear() - 2026) * 12 + hoy.getMonth() - 5 + 1
}
