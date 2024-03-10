import { Session } from 'next-auth';

export type HeaderRightSideProps = {
  showAccountDropdown: boolean;
  setShowAccountDropdown: (prev: boolean) => void;
  sessionData: Session | null | undefined;
};
