import { useQueryString } from '@/hooks/useQueryString';

const useModal = (query = 'modal') => {
  // ! With Next.js query string router params
  const {
    createQueryString,
    router,
    pathname,
    getQueryString,
    deleteQueryString,
  } = useQueryString();

  const isOpen = getQueryString(query) === 'true';

  const handleOpenModal = (value?: string) => {
    router.push(`${pathname}?${createQueryString(query, value || 'true')}`);
  };

  const handleCloseModal = () => {
    router.push(`${pathname}?${deleteQueryString(query)}`);
  };

  return {
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
