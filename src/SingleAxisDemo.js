import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Slider from "./Slider";

class SingleAxisDemo extends PureComponent {
  static propTypes = {
    // `id` is for Google Analytics
    id: PropTypes.string.isRequired,
    height: PropTypes.number,
    defaultValue: PropTypes.number,
    showNote: PropTypes.bool,
    hideOverflow: PropTypes.bool,
    children: PropTypes.func.isRequired
  };

  static defaultProps = {
    height: 200,
    defaultValue: 0,
    showNote: false
  };

  state = {
    axisValue: this.props.defaultValue,
    isHovering: false
  };

  updateSliderVal = val => {
    this.setState({ axisValue: val });
  };

  handleMouseEnter = () => this.setState({ isHovering: true });
  handleMouseLeave = () => this.setState({ isHovering: false });

  render() {
    const {
      id,
      height,
      showNote,
      children,
      hideOverflow,
      ...delegated
    } = this.props;
    const { isHovering, axisValue } = this.state;

    return (
      <Wrapper style={{ overflow: hideOverflow ? "hidden" : "visible" }}>
        <Box
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <ChildWrapper>{children(axisValue)}</ChildWrapper>

          <SliderWrapper>
            <Slider
              {...delegated}
              value={axisValue}
              height={height}
              onChange={this.updateSliderVal}
            />
          </SliderWrapper>
        </Box>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const ChildWrapper = styled.div`
  flex: 1;
  padding: 30px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  &:hover {
    border-color: rgba(0, 0, 0, 0.18);
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  padding: 30px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0 4px 4px 0;
  ${Box}:hover & {
    background: rgba(0, 0, 0, 0.18);
  }
`;

export default SingleAxisDemo;
