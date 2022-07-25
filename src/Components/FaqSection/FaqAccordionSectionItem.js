import React, { Component } from 'react';
import arrow from '../../images/icon-arrow-down.svg';
import style from './FaqAccordionSectionItem.module.css';

class FaqAccordionSectionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
  }

  selectionHandler = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };

  render() {
    console.log(this.props);
    const { answer, question } = this.props;
    const answerClass = !this.state.isSelected
      ? `${style.answer}`
      : `${style.answer} ${style.selected}`;
    const arrowClass = !this.state.isSelected
      ? `${style.arrow}`
      : `${style.arrow} ${style.rotate}`;
    const image = <img className={arrowClass} src={arrow} alt="arrow icon" />;

    return (
      <div className={style['accordion-wrapper']}>
        <h3 onClick={this.selectionHandler} className={style.question}>
          {question} {image}
        </h3>

        <p className={answerClass}>{answer}</p>
      </div>
    );
  }
}

export default FaqAccordionSectionItem;
