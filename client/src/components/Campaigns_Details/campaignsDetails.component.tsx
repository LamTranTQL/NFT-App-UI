/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./campaignsDetails.module.css";
import { ChevronDownIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Input from "../Input/input.component";
import Selected from "../Selected/selected.component";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  campaignNameStore,
  dailyBudgetStore,
  startDateStore,
  endDateStore,
  blockSitesStore,
  categoryExclusionStore,
} from "@/stores/campaigns.store";

function CampaignsDetails() {
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const campaignName = useSyncExternalStore(
    campaignNameStore.subscribe,
    campaignNameStore.getSnapshot
  );
  const dailyBudget = useSyncExternalStore(
    dailyBudgetStore.subscribe,
    dailyBudgetStore.getSnapshot
  );
  const startDate = useSyncExternalStore(
    startDateStore.subscribe,
    startDateStore.getSnapshot
  );
  const endDate = useSyncExternalStore(
    endDateStore.subscribe,
    endDateStore.getSnapshot
  );
  const blockSites = useSyncExternalStore(
    blockSitesStore.subscribe,
    blockSitesStore.getSnapshot
  );
  const categoryExclusion = useSyncExternalStore(
    categoryExclusionStore.subscribe,
    categoryExclusionStore.getSnapshot
  );

  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (
      campaignName &&
      dailyBudget &&
      startDate &&
      endDate &&
      blockSites.length !== 0 &&
      categoryExclusion.length !== 0
    ) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);

  return (
    <Accordion.Item className={styles.AccordionItem} value='campaigns-details'>
      <Accordion.Header className={styles.AccordionHeader}>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <p className={styles.AccordionTitle}>Campaign details</p>
          <div className='flex flex-row gap-3 items-center'>
            <ChevronDownIcon className={styles.AccordionChervon} aria-hidden />
            {isChecked ? (
              <CheckIcon className='w-5 h-5 bg-Malachite-500 text-light-100 rounded-xl' />
            ) : (
              <Cross2Icon className='w-5 h-5 text-Thunderbird-500 rounded-xl border-2' />
            )}
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.AccordionContent}>
        <div className={styles.AccordionBox}>
          <h4 className='heading-4'>Basic Information</h4>
          <div className='flex flex-col gap-5 mt-[25px]'>
            <div>
              <label>Campaign name</label>
              <div className='input-wrapper-disabled'>
                <Input type='text' value={campaignName} disabled={true} />
              </div>
            </div>

            <div className='grid grid-cols-3 gap-[35px] justify-between'>
              <div>
                <label>Daily budget</label>
                <div className='input-wrapper-disabled'>
                  <Input type='text' value={`USD ${dailyBudget}`} disabled />
                </div>
              </div>
              <div>
                <label>Start date</label>
                <div className='input-wrapper-disabled'>
                  <Input
                    type='text'
                    value={`${Months[startDate.mmmm]} ${
                      startDate.dddd < 10
                        ? "0" + startDate.dddd
                        : startDate.dddd
                    }, ${startDate.yyyy}`}
                    disabled
                  />
                </div>
              </div>
              <div>
                <label>End date (optional)</label>
                <div className='input-wrapper-disabled'>
                  <Input
                    type='text'
                    value={`${Months[endDate.mmmm]} ${
                      endDate.dddd < 10 ? "0" + endDate.dddd : endDate.dddd
                    }, ${endDate.yyyy}`}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.AccordionBox}>
          <h4 className='heading-4 mb-4'>Block Sites</h4>
          <Selected title='Selected' value={blockSites} />
        </div>

        <div className={styles.AccordionBox}>
          <h4 className='heading-4'>Category Exclusion</h4>
          <div className='mt-[25px] flex flex-col gap-5'>
            <p className='font-normal text-base text-dark-100'>
              Opt out of showing your ads on the following content(s) that
              doesn’t fit your brand safety standards
            </p>
            {categoryExclusion.map((value) => {
              return (
                <div
                  key={uuidv4()}
                  className='flex flex-row gap-3 items-center'
                >
                  <CheckIcon className='text-main-200 w-5 h-5 bg-Primary-50 border border-main-200 rounded-md' />
                  <p className='font-medium text-base text-dark-100'>{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default CampaignsDetails;
