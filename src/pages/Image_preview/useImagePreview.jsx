import { useState } from 'react';

export const useImagePreview = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const openPreview = () => setIsPreviewOpen(true);
  const closePreview = () => setIsPreviewOpen(false);

  return {
    isPreviewOpen,
    openPreview,
    closePreview,
  };
};
