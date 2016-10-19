export default function reverseList(list, outPut) {
  const children = list.children;
  for (let i = children.length - 1; i >= 0; i--) {
    const copy = list.children[i].cloneNode(true);
    outPut.appendChild(copy);
  }
}
