'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import Modal, { ModalProps } from '@/components/modal';

import PermitUser from '@/app/users/_components/PermitUser';
import SuccessModal from '@/app/users/_components/SuccessModal';

// type Props = ModalProps & {
//   users?: typeof userArr;
//   user?: (typeof userArr)[number];
// };

export default function PermitUserContainer({ ...props }: ModalProps) {
  const [permitUserStage, setPermitUserStage] = useState<'permit' | 'success'>(
    'permit'
  );

  function permitUserSuccess() {
    setPermitUserStage('success');
  }

  return (
    <>
      <Modal {...props} className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'>
        <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
          <AnimatePresence mode='wait' initial={false}>
            {permitUserStage === 'permit' && (
              <PermitUser
                permitUserSuccess={permitUserSuccess}
                close={props.handleCloseModal}
              />
            )}
            {permitUserStage === 'success' && (
              <SuccessModal
                caption='This user has been activated successfully and has been removed from the blacklist.'
                close={props.handleCloseModal}
              />
            )}
          </AnimatePresence>
        </section>
      </Modal>
    </>
  );
}
