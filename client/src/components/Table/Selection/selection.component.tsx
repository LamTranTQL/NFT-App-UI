import Button from "@/components/Button/button.component";
import PlusIcon from "@/assets/icons/plus.svg";

function Selection() {
  return (
    <div className='w-full h-[300px] flex flex-col justify-center items-center gap-3'>
      <span className='font-light text-sm text-dark-200'>
        No NFT to display
      </span>
      <Button
        startIcon={PlusIcon}
        content='Submit NFT'
        variant='contained'
        color='primary'
      />
      <a className='font-medium text-sm text-main-300 cursor-pointer'>
        Back to Selection
      </a>
    </div>
  );
}

export default Selection;
