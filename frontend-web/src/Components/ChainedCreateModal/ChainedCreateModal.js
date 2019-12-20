import React from "react";




/**
 *
 * @prop {array} modalList - List of React bootstrap compoenent for creating events
 * @prop {function} ToggleCreateMode - on calling this function creating mode starts]
 *
 * @class ChainedCreateModal
 * @description This component Will display all Modal to create event and handle the changes
 * @extends {React.Component}
 */
class ChainedCreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
      showModal: false
    };
  }

  ToggleModel = () => {
    const showModal = !this.state.showModal;
    this.setState({ showModal: true });
  };

  render() {
    //recieving props LargeCalendar.js Component
    const { modalList } = this.props;
    const { currIndex, showModal } = this.state;

    console.log(modalList[0])

    const CurrentModalComponent = modalList[currIndex];
    // console.log("checking here", CurrentModalComponent);
    console.log(this.state.showModal);
    return showModal ? (
      <CurrentModalComponent
        onClickNext={this.handleClickNext}
        showModal={showModal}
      />
    ) : (
      <h1>
        Hello World
      </h1>
    );
  }

  handleClickNext = () => {
    const { modalList } = this.props;
    const { currIndex } = this.state;

    if (currIndex < modalList.length - 1) {
      this.setState({ currIndex: currIndex + 1 });
    } else {
      this.setState({ showModal: false });
    }
  };
}

export default ChainedCreateModal;
