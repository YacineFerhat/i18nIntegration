import React from 'react'
import { useTranslation } from 'react-i18next'
import './header.scss'
const Header = () => {
    const { t, i18n } = useTranslation()
    return( 
        <div className='rootHeader'>
            <h1>
            {t('title')}
            </h1>
            <h3>
            {t('subTitle')}
            </h3>
        </div>
    )
}

export default Header
