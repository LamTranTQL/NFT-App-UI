import Card from "@/components/Card/card.component";
import Checkbox from "@/components/Checkbox/checkbox.component";
import { v4 as uuidv4 } from "uuid";
import { categoryExclusionStore } from "@/stores/campaigns.store";
import { useSyncExternalStore } from "react";

function Category() {
  const categoryExclusion = useSyncExternalStore(
    categoryExclusionStore.subscribe,
    categoryExclusionStore.getSnapshot,
    () => []
  );

  const emptyCategoryExclusion = [
    {
      id: "Tragedy-and-conflict",
      value: "Tragedy and conflict",
    },
    {
      id: "Sensitive-social-issues",
      value: "Sensitive social issues",
    },
    {
      id: "Profanity-and-rough-language",
      value: "Profanity and rough language",
    },
    {
      id: "Sexually-suggestive",
      value: "Sexually suggestive",
    },
    {
      id: "Sensational-and-shocking",
      value: "Sensational and shocking",
    },
  ];

  const handleClick = (isChecked: boolean, val: string) => {
    if (isChecked) {
      categoryExclusionStore.addCategoryExclusion(val);
    } else {
      const index = categoryExclusion.indexOf(val);
      categoryExclusionStore.removeCategoryExclusion(index);
    }
  };

  return (
    <>
      <Card header='Category Exclusion'>
        <div className='flex flex-col gap-5'>
          <label className='m-0'>
            Opt out of showing your ads on the following content(s) that doesn’t
            fit your brand safety standards
          </label>
          {emptyCategoryExclusion.map((item) => {
            const isChecked = categoryExclusion.includes(item.value);
            return (
              <Checkbox
                key={uuidv4()}
                label={true}
                id={item.id}
                name={item.id}
                value={item.value}
                onClick={handleClick}
                isChecked={isChecked}
              />
            );
          })}
        </div>
      </Card>
    </>
  );
}

export default Category;
