import React, { useState } from 'react';
import ContentManager from './components/ContentManager';
import './styles/theme.css'; // استيراد التنسيق الهندسي الخاص بك

function App() {
  // الحالة للتبديل بين عرض "الدورات" و "المستندات"
  const [view, setView] = useState('courses'); 

  return (
    <div className="app-container">
      {/* رأس الصفحة - الهوية العالمية لتشييد */}
      <header className="main-header">
        <div className="logo">TASHYEED | منصة تشييد</div>
        <nav className="main-nav">
          <button 
            className={view === 'courses' ? 'active-nav' : ''} 
            onClick={() => setView('courses')}
          >
            الدورات الهندسية
          </button>
          <button 
            className={view === 'documents' ? 'active-nav' : ''} 
            onClick={() => setView('documents')}
          >
            المخططات والمستندات
          </button>
        </nav>
      </header>

      {/* منطقة المحتوى - هنا يظهر المشغل والبيانات */}
      <main className="content-area">
        <div className="view-title">
          {view === 'courses' ? '📂 قائمة المحتوى المرئي' : '📄 أرشيف المخططات الهندسية'}
        </div>
        
        {/* استدعاء مدير المحتوى الذي برمجناه بناءً على الصور */}
        <ContentManager type={view} />
      </main>

      {/* تذييل الصفحة */}
      <footer className="main-footer">
        <p>جميع الحقوق محفوظة لمنصة تشييد العالمية © 2024</p>
      </footer>
    </div>
  );
}

export default App;
