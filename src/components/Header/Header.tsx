import styles from './Header.module.scss';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Header = ({ children }: IProps) => {
  return <header className={styles.Header}>{children}</header>;
};

export default Header;