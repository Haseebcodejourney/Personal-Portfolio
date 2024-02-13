// App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
// inport useTranslation

function Translation() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    return (
      <div>
        <h1>{t('welcomeMessage')}</h1>
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('es')}>Spanish</button>
          <button onClick={() => changeLanguage('ar')}>Arabic</button>
          <button onClick={() => changeLanguage('fr')}>French</button>
          {/* Add more buttons for other languages as needed */}
        </div>
      </div>
    );
}

export default Translation;
