import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [generatedLink, setGeneratedLink] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setUploaded(true);
  };

  const handleUpload = async () => {
    if (!image) {
      console.error('Please select an image first');
      return;
    }

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'images');
    data.append('cloud_name', 'dg6sycihu');

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dg6sycihu/image/upload", {
        method: "post",
        body: data
      });
      

      const responseData = await response.json();
      setGeneratedLink(responseData.url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleCopyClick = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink);
      alert('Link copied to clipboard!');
    }
  };
  const truncatedLink = generatedLink ? `${generatedLink.slice(0, 25)}...` : '';

  return (
    <div className='flex flex-col items-center justify-center'>
        <p className="font-bold text-2xl mb-5">Generate an image url</p>
      <label htmlFor="imageInput" style={{ cursor: 'pointer', padding: '10px', border: '1px solid #4CAF50', borderRadius: '15px', color: '#4CAF50' }}>
        {uploaded ? 'Uploaded ✅' : 'Select an Image'}
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </label>
      {uploaded &&
      <button onClick={handleUpload} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>
        Generate Link
      </button>
        }

      {generatedLink && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
          <p>{truncatedLink}<button onClick={handleCopyClick} style={{ cursor: 'pointer', background: 'none', border: 'none', outline: 'none' }}>
            <FaCopy size={20} style={{ marginRight: '5px', marginLeft:'10px', paddingTop:'2px'}} />
          </button></p>
          
        </div>
      )}
      <div className='mt-10'>
        <p style={{color:'red', fontWeight:'bold'}}>Note: </p>
        <ul style={{color:'green' , fontWeight:'bold'}} >
          <li>1. Please use this image generator to upload your images.</li>
          <li>2. Copy & Paste the generated link in the registration form.</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageUploader;
