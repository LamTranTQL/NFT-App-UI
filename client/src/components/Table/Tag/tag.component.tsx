import TagProps from "./tag.interface";

function Tag(props: TagProps) {
  const { status, badge } = props;
  return (
    <div className='flex flex-row gap-3'>
      <span className='text-xs font-medium text-main-200 py-[10px] px-2 rounded-lg bg-main-200 bg-opacity-10'>
        {status}
      </span>
      {badge && (
        <span className='text-xs font-medium text-Blue-700 py-[10px] px-2 rounded-lg bg-Blue-50'>
          {badge}
        </span>
      )}
    </div>
  );
}

export default Tag;
