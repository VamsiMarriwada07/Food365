import React from 'react';

const Profile = () => {
  // Replace 'path/to/your/file.html' with the actual path to your HTML file
  const htmlFilePath = '../test.html';

  return (
    <div>
      <iframe
        src={htmlFilePath}
        width="100%"
        height="710"
        title="HTML Display"
        style={{margin:0}}
      />
      hi
    </div>
  );
};


export default Profile;
