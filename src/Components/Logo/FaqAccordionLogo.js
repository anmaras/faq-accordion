import React, { Component } from 'react';
import bgPatternMobile from '../../images/bg-pattern-mobile.svg';
import womanMobile from '../../images/illustration-woman-online-mobile.svg';
import womanDesktop from '../../images/illustration-woman-online-desktop.svg';
import bgPatternDesktop from '../../images/bg-pattern-desktop.svg';
import boxDesktop from '../../images/illustration-box-desktop.svg';
import style from './FaqAccordionLogo.module.css';
class faqAccordionLogo extends Component {
  render() {
    return (
      <div className={style['mob-logo__wrapper']}>
        <picture>
          <source media="(min-width:1440px)" srcSet={boxDesktop} />
          <source media="(min-width:375px)" srcSet={boxDesktop} width="0" />
          <img src={boxDesktop} alt="box logo" className={style.box} />
        </picture>
        <picture>
          <source media="(min-width:1440px)" srcSet={womanDesktop} />
          <source media="(min-width:375px)" srcSet={womanMobile} />
          <img src={womanMobile} alt="woman on office platform" />
        </picture>
        <picture>
          <source media="(min-width:1440px)" srcSet={bgPatternDesktop} />
          <source media="(min-width:375px)" srcSet={bgPatternMobile} />
          <img
            className={style['mob-logo__pattern']}
            src={bgPatternMobile}
            alt="mobile shadow pattern"
          />
        </picture>
      </div>
    );
  }
}

export default faqAccordionLogo;
