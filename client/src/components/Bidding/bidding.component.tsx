/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "@/styles/accordion.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Input from "../Input/input.component";
import { useEffect, useState, useSyncExternalStore } from "react";
import { focusOnStore, targetCPAStore } from "@/stores/bidding.store";

function Bidding() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const focusOn = useSyncExternalStore(
    focusOnStore.subscribe,
    focusOnStore.getSnapshot
  );
  const targetCPA = useSyncExternalStore(
    targetCPAStore.subscribe,
    targetCPAStore.getSnapshot
  );

  useEffect(() => {
    if (focusOn) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);
  return (
    <Accordion.Item className={styles.AccordionItem} value='bidding'>
      <Accordion.Header className={styles.AccordionHeader}>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <p className={styles.AccordionTitle}>Bidding</p>
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
          <h4 className='heading-4'>Bid Strategy</h4>

          <div className='mt-[25px] flex flex-col gap-5'>
            <div>
              <label>What do you want to focus on?</label>
              <div className='input-wrapper-disabled'>
                <Input type='text' value={focusOn} disabled={true} />
              </div>
            </div>
            {focusOn === "Target CPA" && (
              <div>
                <label>Target CPA</label>
                <div className='input-wrapper-disabled'>
                  <Input type='text' value={`USD`} disabled={true} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default Bidding;
