/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import LogoDark from 'assets/logo.svg';
import LogoLight from 'assets/logo-light.svg';

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Image
        src={isWhite ? LogoLight : LogoDark}
        alt="startup landing logo"
        width={100}
      />
    </Link>
  );
}
