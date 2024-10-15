import Template from '@/app/blogs/(create-edit)/_components/Template';

export default function TemplateContainer() {
  return (
    <div className='flex flex-col gap-[10px] bg-white rounded-[8px] p-7'>
      <p className='font-medium text-sm'>Choose a template</p>
      <div className='flex items-center gap-5'>
        <Template />
        <Template />
        <Template />
      </div>
    </div>
  );
}
