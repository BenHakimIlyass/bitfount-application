import { SequenceStatus } from '../../configs';
import { Completed, Error, Queued, Pending } from './icons';
import Link from 'next/link';
const statusVariant = {
  [SequenceStatus.PENDING]: {
    info: 'Pending...',
    icon: Pending,
  },
  [SequenceStatus.ERROR]: {
    info: (
      <>
        An error occured,{' '}
        <Link href='/logs'>
          <a>click here to see build logs.</a>
        </Link>
      </>
    ),
    icon: Error,
  },
  [SequenceStatus.QUEUED]: {
    info: 'Queued',
    icon: Queued,
  },
  [SequenceStatus.COMPLETED]: {
    info: 'Completed',
    icon: Completed,
  },
};
export default statusVariant;
