/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import styles from "./targeting.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Input from "../Input/input.component";
import Selected from "../Selected/selected.component";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  locationsStore,
  demographicsStore,
  keywordsStore,
  topicsStore,
} from "@/stores/targeting.store";
import USA from "@/assets/icons/usa.svg";
import Canada from "@/assets/icons/canada.svg";
import France from "@/assets/icons/france.svg";
import LocationsSelected from "../Location_Selected/locationSelected.component";
import { LocationType, LocationsType } from "@/types/types";
import { emptyLocation } from "@/demo/Empty_Value/emptyValue";

function Targeting() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [locationsSelected, setLocationsSelected] = useState<LocationType[]>(
    []
  );

  const locations = useSyncExternalStore(
    locationsStore.subscribe,
    locationsStore.getSnapshot
  );
  const demographics = useSyncExternalStore(
    demographicsStore.subscribe,
    demographicsStore.getSnapshot
  );
  const keywords = useSyncExternalStore(
    keywordsStore.subscribe,
    keywordsStore.getSnapshot
  );
  const topics = useSyncExternalStore(
    topicsStore.subscribe,
    topicsStore.getSnapshot
  );

  useEffect(() => {
    if (
      locations &&
      demographics.length !== 0 &&
      keywords.length !== 0 &&
      topics.length !== 0
    ) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    let val = emptyLocation.find((item) => item.content === locations);
    setLocationsSelected(val?.value || []);
  }, []);

  return (
    <Accordion.Item className={styles.AccordionItem} value='targeting'>
      <Accordion.Header className={styles.AccordionHeader}>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <p className={styles.AccordionTitle}>Targeting</p>
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
          <h4 className='heading-4'>Location Targeting</h4>
          <div className='mt-[25px]'>
            <label>Select locations to target</label>
            <div className='input-wrapper-disabled'>
              <Input type='text' disabled={true} value={locations} />
            </div>

            <div className='mt-[25px]'>
              {locationsSelected.length !== 0 && (
                <LocationsSelected value={locationsSelected} />
              )}
            </div>
          </div>
        </div>

        <div className={styles.AccordionBox}>
          <h4 className='heading-4'>Demographics</h4>
          <div className='mt-4'>
            <Selected title='Selected' value={demographics} />
          </div>
        </div>

        <div className={styles.AccordionBox}>
          <h4 className='heading-4'>Keywords</h4>
          <div className='mt-4'>
            <Selected title='Selected' value={keywords} />
          </div>
        </div>

        <div className={styles.AccordionBox}>
          <h4 className='heading-4'>Topics</h4>
          <div className='mt-4'>
            <Selected title='Selected' value={topics} />
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default Targeting;
