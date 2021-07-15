import * as React from 'react';
import classnames from 'classnames/bind';
import { DropPropsType } from './_types';
import styles from './Drop.module.scss';

const cn = classnames.bind(styles);
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

export class Drop extends React.PureComponent<DropPropsType, StateType> {
    private readonly wrapperRef: any;

    private readonly controlRef: any;

    private readonly dropdownRef: any;

    constructor(props: DropPropsType) {
        super(props);
        this.wrapperRef = React.createRef();
        this.controlRef = React.createRef();
        this.dropdownRef = React.createRef();

        this.state = {
            controlHeight: '',
            controlWidth: '',
            dropdownHeight: '',
            dropdownWidth: '',
            isVisible: false,
            openToLeft: false,
            openToTop: false,,
        };
    }

    componentDidMount(): void {
        const { isOpened = false, isSubDrop } = this.props;
        if (isOpened) {
            this.setState({ isVisible: isOpened }, () => {
                this.controlRef.current.click();
            });
        }
        if (this.controlRef.current && this.dropdownRef.current) {
            this.setState({
                controlHeight: this.controlRef.current.scrollHeight,
                controlWidth: this.controlRef.current.scrollWidth,
                dropdownHeight: isSubDrop
                    ? this.dropdownRef.current.scrollHeight
                    : this.dropdownRef.current.clientHeight,
                dropdownWidth: isSubDrop
                    ? this.dropdownRef.current.scrollWidth
                    : this.dropdownRef.current.clientWidth,,
            });
        }
    }

    componentDidUpdate(prevProps: DropPropsType): void {
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
                controlWidth: this.controlRef.current.scrollWidth,
                dropdownHeight: this.dropdownRef.current.scrollHeight,
                dropdownWidth: this.dropdownRef.current.scrollWidth,,
            });
        }
    }

    handleClickOutside = (e: any) => {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
            this.setState(
                {
                    isVisible: false,
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
                    bottomSpace <= this.dropdownRef.current.getBoundingClientRect().height &&
                    bottomSpace < topSpace;
                const openToLeft =
                    rightSpace <= this.dropdownRef.current.getBoundingClientRect().width &&
                    rightSpace < leftSpace;

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
            dropdownWidth,,
        } = this.state;

        const wrapperStyles: any = {
            visibility: !isVisible ? 'hidden' : 'visible',
            top: openToTop ? `-${dropdownHeight}px` : `${controlHeight}px`,
            left: openToLeft ? `${Number(controlWidth) - Number(dropdownWidth)}px` : '0',,
        };

        return (
            <div className={cn(CLASS_NAME)} ref={this.wrapperRef}>
                <button
                    className={cn(`${CLASS_NAME}__control-wrapper`)}
                    ref={this.controlRef}
                    type="button"
                    onClick={this.handleOnControl}
                >
                    {control}
                </button>
                <div
                    className={cn(`${CLASS_NAME}__dropdown-wrapper`)}
                    ref={this.dropdownRef}
                    style={wrapperStyles}
                >
                    {dropdown}
                </div>
            </div>
        );
    }
}
