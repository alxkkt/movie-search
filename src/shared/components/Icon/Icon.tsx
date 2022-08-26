import Icons from '../../../images/icons.svg';

interface IProps {
    name: string;
    width: number;
    height: number;
    className?: string;
}

const Icon = ({ name, width, height, className }: IProps) => {
  return (
    <svg aria-hidden='true' width={width} height={height} className={className}>
      <use href={Icons + `#${name}`}></use>
    </svg>
  );
};

export default Icon;