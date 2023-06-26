function getDataFromGoogleDrive(fileId) {
    var clientId = '1046816014410-skfrmhp4fsdkto69s1vbeidippi606lb.apps.googleusercontent.com';
    var accessToken = 'file:///home/farhan/Documents/gabut/google%20drive%20api/index.html'; // Ganti dengan access token yang valid
    
    var url = 'file:///home/farhan/Documents/gabut/google%20drive%20api/index.html' + fileId + '?alt=media';
  
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data dari Google Drive:', data);
      // Lakukan operasi apa pun yang ingin Anda lakukan dengan data dari Google Drive
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
    });
  }
  