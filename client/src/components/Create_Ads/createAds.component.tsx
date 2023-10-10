/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "@/styles/accordion.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Input from "../Input/input.component";
import Selected from "../Selected/selected.component";
import {
  headlinesStore,
  longHeadlineStore,
  descriptionsStore,
  CTAStore,
  finalURLStore,
} from "@/stores/createAds.store";
import { useEffect, useState, useSyncExternalStore } from "react";

function CreateAds() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const headlines = useSyncExternalStore(
    headlinesStore.subscribe,
    headlinesStore.getSnapshot
  );
  const longHeadline = useSyncExternalStore(
    longHeadlineStore.subscribe,
    longHeadlineStore.getSnapshot
  );
  const descriptions = useSyncExternalStore(
    descriptionsStore.subscribe,
    descriptionsStore.getSnapshot
  );
  const finalURL = useSyncExternalStore(
    finalURLStore.subscribe,
    finalURLStore.getSnapshot
  );
  const callToAction = useSyncExternalStore(
    CTAStore.subscribe,
    CTAStore.getSnapshot
  );

  useEffect(() => {
    if (
      headlines.headline1 &&
      headlines.headline2 &&
      headlines.headline3 &&
      headlines.headline4 &&
      headlines.headline5 &&
      longHeadline &&
      descriptions.description1 &&
      descriptions.description2 &&
      descriptions.description3 &&
      descriptions.description4 &&
      descriptions.description5 &&
      finalURL &&
      callToAction
    ) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);

  const emptyCTA = ["Buy Now"];
  return (
    <Accordion.Item className={styles.AccordionItem} value='create-ads'>
      <Accordion.Header className={styles.AccordionHeader}>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <p className={styles.AccordionTitle}>Create Ads</p>
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
          <h4 className='heading-4'>Headlines</h4>

          <div className='mt-[25px] flex flex-col gap-5'>
            <div>
              <label>Headline 1</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={headlines.headline1}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <label>Headline 2</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={headlines.headline2}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <label>Headline 3</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={headlines.headline3}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <label>Headline 4</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={headlines.headline4}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <label>Headline 5</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={headlines.headline5}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.AccordionBox}>
          <h4 className='heading04'>Long Headline</h4>
          <div className='mt-[25px]'>
            <div className='input-wrapper-disabled'>
              <Input type='text' value={longHeadline} disabled={true} />
            </div>
          </div>
        </div>

        <div className={styles.AccordionBox}>
          <h4 className='heading-4'>Description</h4>

          <div className='mt-[25px] flex flex-col gap-5'>
            <div>
              <label>Description 1</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={descriptions.description1}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <label>Description 2</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={descriptions.description2}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <label>Description 3</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={descriptions.description3}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <label>Description 4</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={descriptions.description4}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <label>Description 5</label>
              <div className='input-wrapper-disabled'>
                <Input
                  type='text'
                  value={descriptions.description5}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.AccordionBox}>
          <h4 className='heading04'>Final URL</h4>
          <div className='mt-[25px]'>
            <label className='mb-0'>URL</label>
            <div className='input-wrapper-disabled'>
              <Input type='text' value={finalURL} disabled={true} />
            </div>
          </div>
        </div>

        <div className={styles.AccordionBox}>
          <h4 className='heading04'>Call To Action</h4>
          <div className='mt-[25px]'>
            <Selected
              title='Selected'
              value={callToAction ? [callToAction] : undefined}
            />
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default CreateAds;
