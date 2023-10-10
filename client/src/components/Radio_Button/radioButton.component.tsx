import * as RadioGroup from "@radix-ui/react-radio-group";
import styles from "./radioButton.module.scss";
import RadioButtonProps from "./radioButton.interface";

function RadioButton(props: RadioButtonProps) {
  const { label, value, onValueChange, defaultValue } = props;

  return (
    <form>
      <div className='flex flex-col gap-3'>
        <p className='font-normal text-base text-dove-600'>{label}</p>
        <RadioGroup.Root
          className={styles.RadioGroupRoot}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
        >
          {value.length &&
            value.map((item, index) => {
              if (index === 0) {
                return (
                  <RadioGroup.Item
                    key={item.id}
                    className={styles.FirstRadioGroupItem}
                    value={item.value}
                    id={item.id}
                  >
                    {item.value}
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                );
              } else if (index === value.length - 1) {
                return (
                  <RadioGroup.Item
                    key={item.id}
                    className={styles.LastRadioGroupItem}
                    value={item.value}
                    id={item.id}
                  >
                    {item.value}
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                );
              } else {
                return (
                  <RadioGroup.Item
                    key={item.id}
                    className={styles.RadioGroupItem}
                    value={item.value}
                    id={item.id}
                  >
                    {item.value}
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                );
              }
            })}
        </RadioGroup.Root>
      </div>
    </form>
  );
}

export default RadioButton;
