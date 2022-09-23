import styleMain from './styles/main.css';

$(() => {
  $('#addCommentForm').submit((e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let data = {};
    formData.forEach((val, key) => data[key] = val);
    console.log(data);

    return fetch('/api/comment', {
      method: 'PUT',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify(data)
    });
  });
});
