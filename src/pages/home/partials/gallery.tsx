import React, { useState } from 'react';
import Modal from '../../../components/Modal';

interface Photo {
  id: number;
  src: string;
  alt: string;
  type: 'image' | 'video';
}


const photos: Photo[] = [
  { id: 1, src: 'images/1.jpg', alt: 'Placeholder Image 1', type: 'image' },
  { id: 2, src: 'images/2.jpg', alt: 'Placeholder Image 2', type: 'image' },
  { id: 3, src: 'images/3.jpg', alt: 'Placeholder Image 3', type: 'image' },
  { id: 4, src: 'images/4.jpg', alt: 'Placeholder Image 4', type: 'image' },
  { id: 5, src: 'images/5.jpg', alt: 'Placeholder Image 5', type: 'image' },
  { id: 6, src: 'images/6.jpg', alt: 'Placeholder Image 6', type: 'image' },
  { id: 7, src: 'images/7.jpg', alt: 'Placeholder Image 7', type: 'image' },
  { id: 8, src: 'images/8.jpg', alt: 'Placeholder Image 8', type: 'image' },
  { id: 9, src: 'images/9.jpg', alt: 'Placeholder Image 9', type: 'image' },
  { id: 10, src: 'images/10.jpg', alt: 'Placeholder Image 10', type: 'image' },
  { id: 11, src: 'images/11.jpg', alt: 'Placeholder Image 11', type: 'image' },
  { id: 12, src: 'images/12.jpg', alt: 'Placeholder Image 12', type: 'image' },
  { id: 13, src: 'images/13.jpg', alt: 'Placeholder Image 13', type: 'image' },
  { id: 14, src: 'images/14.jpg', alt: 'Placeholder Image 14', type: 'image' },
  { id: 15, src: 'images/als.jpg', alt: 'Placeholder Image 15', type: 'image' },
  { id: 16, src: 'images/alsa.jpg', alt: 'Placeholder Image 16', type: 'image' },
  { id: 17, src: 'videos/1.mp4', alt: 'Sample Video', type: 'video' },
];

const Gallery: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ src: string; alt: string }>({ src: '', alt: '' });

  const openModal = (src: string, alt: string) => {
    setModalContent({ src, alt });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="mb-4 break-inside-avoid">
            {photo.type === 'image' ? (
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg cursor-pointer"
                onClick={() => openModal(photo.src, photo.alt)}
              />
            ) : (
              <video
                controls
                autoPlay
                muted
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
              >
                <source src={photo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        src={modalContent.src}
        alt={modalContent.alt}
      />
    </div>
  );
};
  

export default Gallery;
