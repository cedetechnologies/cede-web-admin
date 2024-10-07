'use client';

import { AnimatePresence } from 'framer-motion';

import Modal, { ModalProps } from '@/components/modal';

import { useAppDispatch, useAppSelector } from '@/store';

import AuthorizeRefund from '@/app/(authenticated-layout)/transactions/_components/AuthorizeRefund';
import ResolveMenu from '@/app/(authenticated-layout)/transactions/_components/ResolveMenu';
import TransactionApproved from '@/app/(authenticated-layout)/transactions/_components/TransactionApproved';
import TransactionDetails from '@/app/(authenticated-layout)/transactions/_components/TransactionDetails';
import TransactionOtp from '@/app/(authenticated-layout)/transactions/_components/TransactionOtp';
import TransactionPending from '@/app/(authenticated-layout)/transactions/_components/TransactionPending';
import TransactionRefundApproved from '@/app/(authenticated-layout)/transactions/_components/TransactionRefundApproved';
import TransactionRequestDocument from '@/app/(authenticated-layout)/transactions/_components/TransactionRequestDocument';
import {
  resetTransactionDetailsStage,
  TRANSACTION_DETAILS_APPROVE_STAGE,
  TRANSACTION_DETAILS_DETAIL_STAGE,
  TRANSACTION_DETAILS_MENU_STAGE,
  TRANSACTION_DETAILS_OTP_STAGE,
  TRANSACTION_DETAILS_PENDING_STAGE,
  TRANSACTION_DETAILS_REFUND_APPROVED_STAGE,
  TRANSACTION_DETAILS_REFUND_STAGE,
  TRANSACTION_DETAILS_REQUEST_STAGE,
} from '@/slices/transactionDetailsSlice';

export default function TransactionModalContainer({ ...props }: ModalProps) {
  const transactionDetailsStage = useAppSelector(
    (state) => state.transactionDetails.stage
  );

  const dispatch = useAppDispatch();

  function resetTransactionDetailsAfterClose() {
    dispatch(resetTransactionDetailsStage());
  }

  return (
    <>
      <Modal
        {...props}
        onAfterClose={resetTransactionDetailsAfterClose}
        className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'
      >
        <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
          <AnimatePresence mode='wait' initial={false}>
            {transactionDetailsStage === TRANSACTION_DETAILS_DETAIL_STAGE && (
              <TransactionDetails close={props.handleCloseModal} />
            )}
            {transactionDetailsStage === TRANSACTION_DETAILS_MENU_STAGE && (
              <ResolveMenu close={props.handleCloseModal} />
            )}
            {transactionDetailsStage === TRANSACTION_DETAILS_PENDING_STAGE && (
              <TransactionPending close={props.handleCloseModal} />
            )}
            {transactionDetailsStage === TRANSACTION_DETAILS_APPROVE_STAGE && (
              <TransactionApproved close={props.handleCloseModal} />
            )}
            {transactionDetailsStage === TRANSACTION_DETAILS_REQUEST_STAGE && (
              <TransactionRequestDocument close={props.handleCloseModal} />
            )}
            {transactionDetailsStage === TRANSACTION_DETAILS_REFUND_STAGE && (
              <AuthorizeRefund close={props.handleCloseModal} />
            )}
            {transactionDetailsStage === TRANSACTION_DETAILS_OTP_STAGE && (
              <TransactionOtp close={props.handleCloseModal} />
            )}
            {transactionDetailsStage ===
              TRANSACTION_DETAILS_REFUND_APPROVED_STAGE && (
              <TransactionRefundApproved close={props.handleCloseModal} />
            )}
          </AnimatePresence>
        </section>
      </Modal>
    </>
  );
}
