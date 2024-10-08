'use client';

import { AnimatePresence } from 'framer-motion';

import Modal, { ModalProps } from '@/components/modal';

import { useAppDispatch, useAppSelector } from '@/store';

import CounterRate from '@/app/(authenticated-layout)/rate-negotiation/_components/CounterRate';
import RateDetails from '@/app/(authenticated-layout)/rate-negotiation/_components/RateDetails';
import SuccessModal from '@/app/users/_components/SuccessModal';
import {
  RATE_DETAILS_APPROVED_STAGE,
  RATE_DETAILS_COUNTER_APPROVED_STAGE,
  RATE_DETAILS_COUNTER_STAGE,
  RATE_DETAILS_DETAIL_STAGE,
  resetRateDetailsStage,
} from '@/slices/rateDetails';

export default function RateModalContainer({ ...props }: ModalProps) {
  const rateDetailsStage = useAppSelector((state) => state.rateDetails.stage);

  const dispatch = useAppDispatch();

  function resetRateDetailsAfterClose() {
    dispatch(resetRateDetailsStage());
  }

  return (
    <>
      <Modal
        {...props}
        onAfterClose={resetRateDetailsAfterClose}
        className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'
      >
        <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
          <AnimatePresence mode='wait' initial={false}>
            {rateDetailsStage === RATE_DETAILS_DETAIL_STAGE && (
              <RateDetails close={props.handleCloseModal} />
            )}
            {rateDetailsStage === RATE_DETAILS_COUNTER_STAGE && (
              <CounterRate close={props.handleCloseModal} />
            )}
            {rateDetailsStage === RATE_DETAILS_APPROVED_STAGE && (
              <SuccessModal
                close={props.handleCloseModal}
                caption='Negotiated rate approved'
              />
            )}
            {rateDetailsStage === RATE_DETAILS_COUNTER_APPROVED_STAGE && (
              <SuccessModal
                close={props.handleCloseModal}
                caption='A new rate has been set'
              />
            )}
          </AnimatePresence>
        </section>
      </Modal>
    </>
  );
}
