import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
      isOpen: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
      this.props.onClick(this.props.label);
    };

    render() {
      const {
        onClick,
        props: { isOpen, label },
      } = this;

      return (
        <div
          style={{
            padding: '5px 10px',
            borderTop: '1px solid #e3e3e3',
            fontSize: '1.5rem'
          }}
        >
          <div onClick={onClick} style={{ cursor: 'pointer', fontSize: '2rem', color: '#333' }}>
            {label}
            <div style={{ float: 'right' }}>
              {!isOpen && <span>+</span>}
              {isOpen && <span>-</span>}
            </div>
          </div>
          {isOpen && (
            <div
              style={{
                background: '#f7f7f7',
                marginTop: 10,
                padding: '10px 20px',
              }}
            >
              {this.props.children}
            </div>
          )}
        </div>
      );
    }
  }

  export default AccordionSection;
