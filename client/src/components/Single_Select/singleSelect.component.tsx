"use client";
import SelectProps from "./singleSelect.interface";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import styles from "./singleSelect.module.css";

function SingleSelect(props: SelectProps) {
  const {
    placeholder,
    ariaLabel,
    onValueChange,
    value,
    className,
    defaultValue,
  } = props;

  return (
    <Select.Root onValueChange={onValueChange} defaultValue={defaultValue}>
      <Select.Trigger
        className={`${styles.SelectTrigger} ${className}`}
        aria-label={ariaLabel}
      >
        <Select.Value
          className={styles.SelectValue}
          placeholder={placeholder}
        />
        <Select.Icon className='w-6 h-6'>
          <ChevronDownIcon className='w-full h-auto text-light-400' />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles.SelectContent}>
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group>
              <Select.Label className={styles.SelectLabel}>
                {placeholder}
              </Select.Label>
              <Select.Separator className={styles.SelectSeparator} />
              <div className={styles.SelectItemContainer}>
                {value &&
                  value.map((item) => {
                    return (
                      <Select.Item
                        key={item.id}
                        value={item.content}
                        className={styles.SelectItem}
                      >
                        <Select.ItemText>{item.content}</Select.ItemText>
                      </Select.Item>
                    );
                  })}
              </div>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export default SingleSelect;
