export default function getText(url) {
  return fetch(url).then(res => res.text());
}
