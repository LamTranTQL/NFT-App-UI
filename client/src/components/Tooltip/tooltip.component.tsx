import * as Tooltip from "@radix-ui/react-tooltip";
import ToolTipProps from "./tooltip.interface";

const ToolTip = (props: ToolTipProps) => {
  const { children, content } = props;
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className='text-[10px] line-height-3 p-4 text-main-100 rounded-xl bg-light-100 font-medium max-w-[292px] shadow-customSecondary'
            sideOffset={5}
          >
            {content}
            <Tooltip.Arrow className='TooltipArrow fill-light-100' />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default ToolTip;
