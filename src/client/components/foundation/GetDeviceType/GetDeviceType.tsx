import type { ReactNode } from 'react';
import { Component } from 'react';

export const DeviceType = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE',
} as const;
export type DeviceType = typeof DeviceType[keyof typeof DeviceType];

type Props = {
  children: ({ deviceType }: { deviceType: DeviceType }) => ReactNode;
};

export class GetDeviceType extends Component<Props> {
  private _windowWidth: number;

  constructor(props: Props) {
    super(props);
    this._windowWidth = window.innerWidth;
  }

  componentDidMount(): void {
    this._checkIsDesktop();
    window.addEventListener('resize', this._checkIsDesktop);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this._checkIsDesktop);
  }

  private _checkIsDesktop() {
    this._windowWidth = window.innerWidth;
  }

  render() {
    const { children: render } = this.props;
    return render({
      deviceType: this._windowWidth >= 1024 ? DeviceType.DESKTOP : DeviceType.MOBILE,
    });
  }
}
