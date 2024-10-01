'use client';

import { AnimatePresence } from 'framer-motion';

import Modal, { ModalProps } from '@/components/modal';

import { useAppDispatch, useAppSelector } from '@/store';

import BlacklistUser from '@/app/users/_components/BlacklistUser';
import SuccessModal from '@/app/users/_components/SuccessModal';
import { userArr } from '@/app/users/_utils/constants';
import {
  BLAcKLIST_STAGE_ONE,
  BLACKLIST_SUCCESS_STAGE,
  resetBlacklistUser,
} from '@/slices/blacklistUser';

type Props = ModalProps & {
  users?: typeof userArr;
  user?: (typeof userArr)[number];
};

export default function BlacklistUserModalContainer({
  users,
  user,
  ...props
}: Props) {
  const blacklistUserStage = useAppSelector(
    (state) => state.blacklistUser.stage
  );

  const dispatch = useAppDispatch();

  const name = user
    ? 'Odell Beckham' // user?.name
    : users && users.length > 0
    ? `${users[0].name}, +${users.length - 1} others`
    : '';

  const successMessage = `${name} has been blacklisted.`;

  const isMultiple = !!(users && !user);

  function resetBlacklistAfterClose() {
    dispatch(resetBlacklistUser());
  }

  return (
    <>
      <Modal
        {...props}
        onAfterClose={resetBlacklistAfterClose}
        className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'
      >
        <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
          <AnimatePresence mode='wait' initial={false}>
            {blacklistUserStage === BLAcKLIST_STAGE_ONE && (
              <BlacklistUser isMultiple={isMultiple} {...props} />
            )}
            {blacklistUserStage === BLACKLIST_SUCCESS_STAGE && (
              <SuccessModal
                caption={successMessage}
                close={props.handleCloseModal}
              />
            )}
          </AnimatePresence>
        </section>
      </Modal>
    </>
  );
}
