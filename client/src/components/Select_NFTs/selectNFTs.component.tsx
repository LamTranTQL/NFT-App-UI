/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./selectNFTs.module.css";
import { ChevronDownIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useState, useSyncExternalStore } from "react";
import Table from "./Table/table.component";
import Pagination from "./Pagination/pagination.component";
import selectedNFTsStore from "@/stores/selectNFTs.store";
import { NFTType } from "@/types/types";

function SelectNFTsComponent() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [valueSelected, setValueSelected] = useState<NFTType[]>([]);

  const selectedNFTs = useSyncExternalStore(
    selectedNFTsStore.subscribe,
    selectedNFTsStore.getSnapshot
  );
  useEffect(() => {
    if (selectedNFTs.size) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);

  useEffect(() => {
    let arr = Array.from(selectedNFTs.values());
    let _value: NFTType[] = [];
    arr.forEach((item, index) => {
      if ((pageIndex - 1) * 6 <= index && index < pageIndex * 6) {
        _value.push(item);
      }
    });
    setValueSelected(_value);
  }, [pageIndex]);

  const handleChangePage = (i: number) => {
    setPageIndex(i + 1);
  };

  return (
    <Accordion.Item className={styles.AccordionItem} value='select-NFTs'>
      <Accordion.Header className={styles.AccordionHeader}>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <p className={styles.AccordionTitle}>Select NFTs</p>
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
          <div className='flex flex-col gap-5'>
            <Table data={valueSelected} />
            <Pagination
              totalPage={Math.floor(selectedNFTs.size / 6) + 1}
              pageIndex={pageIndex}
              onChangePage={handleChangePage}
            />
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default SelectNFTsComponent;
