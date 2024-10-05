'use client';

import { AnimatePresence } from 'framer-motion';

import Modal, { ModalProps } from '@/components/modal';

import { useAppDispatch, useAppSelector } from '@/store';

import EditRate from '@/app/(authenticated-layout)/transactions/rates/_components/EditRate';
import EditRateSuccess from '@/app/(authenticated-layout)/transactions/rates/_components/EditRateSuccess';
import {
  EDIT_RATE_EDIT_STAGE,
  EDIT_RATE_SUCCESS_STAGE,
  resetEditRateState,
} from '@/slices/editExchangeRateSlice';

export default function EditRateModalContainer({ ...props }: ModalProps) {
  const editExchangeRateStage = useAppSelector(
    (state) => state.editExchangeRate.stage
  );

  const dispatch = useAppDispatch();

  function resetEditRateAfterClose() {
    dispatch(resetEditRateState());
  }

  return (
    <>
      <Modal
        {...props}
        onAfterClose={resetEditRateAfterClose}
        className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'
      >
        <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
          <AnimatePresence mode='wait' initial={false}>
            {editExchangeRateStage === EDIT_RATE_EDIT_STAGE && (
              <EditRate close={props.handleCloseModal} />
            )}
            {editExchangeRateStage === EDIT_RATE_SUCCESS_STAGE && (
              <EditRateSuccess close={props.handleCloseModal} />
            )}
          </AnimatePresence>
        </section>
      </Modal>
    </>
  );
}
