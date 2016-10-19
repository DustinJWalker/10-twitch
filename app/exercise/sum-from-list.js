export default function sum(li) {
  let sum = 0;
  for (let i = 0; i < li.children.length; i++) {
    sum = sum + parseInt(li.children[i].innerText);
  }

  return sum;
}
