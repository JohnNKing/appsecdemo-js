import styleMain from './styles/main.css';

$(() => {
  $('#addCommentForm').submit((e) => {
    e.preventDefault();
    addComment(e);
  });
});

async function addComment(e) {

  try {
    let formData = parseForm(e);
    let response = await fetch('/api/comment', {
      method: 'PUT',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify(formData)
    });

    if (response.status === 200) {
      console.log(await response.text());

      $('.comments').append($('.comments .template')
        .clone()
        .removeClass('template')
        .text(formData['comment']));

    } else {
      console.log('Add comment failed with HTTP ' + response.status, response.statusText);
    }

  } catch (error) {
    console.log(error)
  }
}

function parseForm(e) {
  let result = {};
  let formData = new FormData(e.currentTarget);
  formData.forEach((val, key) => result[key] = val);
  return result;
}