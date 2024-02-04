export function getParams() {
  const params = new URLSearchParams(window.location.hash.substring(1));
  return params;
}
