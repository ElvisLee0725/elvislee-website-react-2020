import React from 'react';

const DownloadCV = () => {
  return (
    <div className='text-center mt-4'>
      <a
        className='btn btn--download'
        href='https://drive.google.com/uc?id=1nCoq4I8Cmo9Ru39nNx4CcBZTJY9pj2tf&export=download'
      >
        <i className='fas fa-file-download'></i>&nbsp;Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
