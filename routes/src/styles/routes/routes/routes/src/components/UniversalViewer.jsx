import React from 'react';

export default function UniversalViewer({ url, type }) {
  // دالة لتحويل روابط يوتيوب العادية لروابط قابلة للتضمين (Embed)
  const getEmbedUrl = (link) => {
    if (link.includes('youtube.com')) return link.replace('watch?v=', 'embed/');
    if (link.includes('facebook.com')) return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(link)}`;
    return link;
  };

  return (
    <div className="universal-viewer">
      {/* عرض الفيديوهات والمستندات في إطار واحد (Iframe) */}
      <iframe 
        src={getEmbedUrl(url)}
        width="100%" 
        height="600px" 
        style={{ border: 'none', borderRadius: '15px' }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
    </div>
  );
}
