import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent_v2');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent_v2', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent_v2', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4 animate-in slide-in-from-bottom-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm text-gray-700">
          <p>
            Мы используем cookies для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с{' '}
            <Link to="/privacy" className="text-red-600 hover:underline">
              политикой конфиденциальности
            </Link>{' '}
            и{' '}
            <Link to="/consent" className="text-red-600 hover:underline">
              обработкой персональных данных
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
          >
            Принять
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
          >
            Отклонить
          </button>
          <button
            onClick={declineCookies}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};