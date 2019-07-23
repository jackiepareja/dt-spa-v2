import React, { Component } from 'react';
import Modal from 'react-modal';

import PromoImgXL from "../res/img/promo/dt_831_promo_XL.jpg";
import PromoImgS from "../res/img/promo/dt_831_promo_S.jpg";

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
    width: '60%',
    paddingBottom: '4rem',
    border: '3px solid #718EB9'


  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Promo extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#718EB9';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (

      <div className="Promo">

        <img src={PromoImgXL} className="Promo_img--XL" alt="dog tales promo" />
        <img src={PromoImgS} className="Promo_img--S" alt="dog tales promo" />

        <div className="modal_container" onClick={this.openModal}></div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className="promo_headline" ref={subtitle => this.subtitle = subtitle}>Promo Details</h2>
          <div className="border"></div>
          <button className="close_btn" onClick={this.closeModal}>&times;</button>
          <div>Free weekend boarding: Valid only to first-time boarders. Limit to 2 nights over a weekend. Minimum weekly walks signup required. Expires on 8/31/19.
          Contact us for more details.</div>

        </Modal>
      </div>

    );
  }
}

export default Promo;
