import React, { useState, useEffect } from 'react';
import { getData } from '../utils/api';
import UniversalViewer from './UniversalViewer';

export default function ContentManager({ type }) {
    const [items, setItems] = useState([]);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        // يجلب البيانات بناءً على النوع (courses أو documents) كما في مسارات السيرفر
        getData(type).then(data => {
            setItems(data);
            if (data.length > 0) setActiveItem(data[0]);
        });
    }, [type]);

    return (
        <div className="content-layout">
            {activeItem && (
                <div className="viewer-section">
                    <UniversalViewer url={activeItem.url || activeItem.videoUrl} />
                </div>
            )}
            <div className="list-section">
                {items.map(item => (
                    <div 
                        key={item.id} 
                        className={`item-card ${activeItem?.id === item.id ? 'active' : ''}`}
                        onClick={() => setActiveItem(item)}
                    >
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
