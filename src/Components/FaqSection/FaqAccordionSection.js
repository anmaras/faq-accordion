import React, { Component } from 'react';
import arrow from '../../images/icon-arrow-down.svg';
import style from './FaqAccordionSectionItem.module.css';

class FaqAccordionSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
    };
  }

  toggleActiveClass = (index) => {
    if (this.state.activeIndex !== index) {
      this.setState({
        activeIndex: index,
      });
    } else {
      this.setState({
        activeIndex: null,
      });
    }
  };

  render() {
    const arr = this.props.faq;

    const items = arr.map((item, index) => {
      const answerClass =
        this.state.activeIndex === index
          ? `${style.answer} ${style.selected}`
          : `${style.answer}`;
      const arrowClass =
        this.state.activeIndex === index
          ? `${style.arrow}`
          : `${style.arrow} ${style.rotate}`;

      const questionClass =
        this.state.activeIndex === index
          ? `${style.question}  ${style.qselect}`
          : `${style.question}`;

      const image = <img className={arrowClass} src={arrow} alt="arrow icon" />;
      return (
        <div className={style['accordion-wrapper']} key={index}>
          <p
            onClick={this.toggleActiveClass.bind(this, index)}
            className={questionClass}
          >
            {item.question} {image}
          </p>

          <p className={answerClass}>{item.answer}</p>
        </div>
      );
    });

    return (
      <section className={style['accordion-section']}>
        <h1>FAQ</h1>
        {items}
      </section>
    );
  }
}

export default FaqAccordionSection;
