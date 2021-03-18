import * as React from 'react';
import { Props } from './_types';
import './Drop.scss';

const CLASS_NAME = 'Drop';

type StateType = {
  controlHeight: string;
  controlWidth: string;
  dropdownHeight: string;
  dropdownWidth: string;
  isVisible: boolean;
  openToLeft: boolean;
  openToTop: boolean;
};

export class Drop extends React.PureComponent<Props, StateType> {
  private readonly wrapperRef: any;

  private readonly controlRef: any;

  private readonly dropdownRef: any;

  constructor(props: Props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.controlRef = React.createRef();
    this.dropdownRef = React.createRef();

    this.state = {
      isVisible: false,
      openToTop: false,
      openToLeft: false,
      controlHeight: '',
      dropdownHeight: '',
      controlWidth: '',
      dropdownWidth: ''
    };
  }

  componentDidMount(): void {
    const { isOpened } = this.props;
    if (isOpened) {
      this.setState({ isVisible: isOpened }, () => {
        this.controlRef.current.click();
      });
    }
    if (this.controlRef.current && this.dropdownRef.current) {
      this.setState({
        controlHeight: this.controlRef.current.scrollHeight,
        dropdownHeight: this.dropdownRef.current.scrollHeight,
        controlWidth: this.controlRef.current.scrollWidth,
        dropdownWidth: this.dropdownRef.current.scrollWidth
      });
    }
  }

  componentDidUpdate(prevProps: Props): void {
    const { isOpened, dropdown } = this.props;

    if (prevProps.isOpened !== isOpened && isOpened !== undefined) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isVisible: isOpened });

      // Check whether isOpened is false
      if (!isOpened) {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    }

    // If dropdown will be changed after it was mounted we must re-calculate controlHeight / controlWidth
    if (prevProps.dropdown !== dropdown) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        controlHeight: this.controlRef.current.scrollHeight,
        dropdownHeight: this.dropdownRef.current.scrollHeight,
        controlWidth: this.controlRef.current.scrollWidth,
        dropdownWidth: this.dropdownRef.current.scrollWidth
      });
    }
  }

  handleClickOutside = (e: any) => {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
      this.setState(
        {
          isVisible: false
        },
        () => {
          const { onClickOutside } = this.props;
          if (onClickOutside) {
            onClickOutside();
          }
          document.removeEventListener('mousedown', this.handleClickOutside);
        }
      );
    }
  };

  handleOnControl = (e: any) => {
    const coordinates = e.target.getBoundingClientRect();
    const bottomSpace = document.documentElement.clientHeight - coordinates.bottom;
    const rightSpace = document.documentElement.clientWidth - coordinates.right;
    const topSpace = coordinates.top;
    const leftSpace = coordinates.left;

    this.setState(
      ({ isVisible }) => {
        const openToTop =
          bottomSpace <= this.dropdownRef.current.scrollHeight && bottomSpace < topSpace;
        const openToLeft =
          rightSpace <= this.dropdownRef.current.scrollWidth && rightSpace < leftSpace;
        return { isVisible: !isVisible, openToTop, openToLeft };
      },
      () => {
        const { onClickControl } = this.props;
        if (onClickControl) {
          onClickControl();
        }
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    );
  };

  render() {
    const { control, dropdown } = this.props;
    const {
      isVisible,
      openToTop,
      openToLeft,
      controlHeight,
      dropdownHeight,
      controlWidth,
      dropdownWidth
    } = this.state;

    const wrapperStyles: any = {
      visibility: !isVisible ? 'hidden' : 'visible',
      top: openToTop ? `-${dropdownHeight}px` : `${controlHeight}px`,
      left: openToLeft ? `${Number(controlWidth) - Number(dropdownWidth)}px` : '0'
    };

    return (
      <div className={CLASS_NAME} ref={this.wrapperRef}>
        <button
          className={`${CLASS_NAME}__control-wrapper`}
          onClick={this.handleOnControl}
          ref={this.controlRef}
          type="button"
        >
          {control}
        </button>
        <div
          className={`${CLASS_NAME}__dropdown-wrapper`}
          ref={this.dropdownRef}
          style={wrapperStyles}
        >
          {dropdown}
        </div>
      </div>
    );
  }
}
