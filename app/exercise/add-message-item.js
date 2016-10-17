import createMessageItem from '../../app/exercise/create-message-item';

export default function (list, data) {
  const li = createMessageItem(data);

  list.appendChild(li);
}
