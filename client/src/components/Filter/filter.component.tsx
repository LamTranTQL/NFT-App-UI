"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button/button.component";
import FilterIcon from "@/assets/icons/filter-funnel-01.svg";
import styles from "./filter.module.css";
import { CrossCircledIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import EmthereumLogo from "@/assets/icons/ethereum-eth-logo.svg";
import Image from "next/image";
import Input from "../Input/input.component";

function Filter() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          variant='text'
          color='primary'
          content='Filter'
          startIcon={FilterIcon}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>Filter</Dialog.Title>
          <fieldset className={styles.Fieldset}>
            <label htmlFor='price' className={styles.Label}>
              Price
            </label>
            <div className='w-full border border-Gray-200 rounded-xl py-[18px] px-[23px] flex flex-row justify-between items-center'>
              <div className='flex flex-row gap-5'>
                <Image
                  src={EmthereumLogo}
                  alt='Ethereum logo'
                  className='w-[18px] h-auto'
                />
                <span className='font-normal text-base text-mineShaft-800'>
                  Ethereum (ETH)
                </span>
              </div>
              <ChevronDownIcon className='w-6 h-6' />
            </div>

            <div className='w-full flex flex-row gap-3 items-center'>
              <div className={styles.Input}>
                <Input type='number' placeholder='0.00' min={0} />
              </div>
              <span className='font-bold text-base text-dark-100'>To</span>
              <div className={styles.Input}>
                <Input type='number' placeholder='1.00' min={0} />
              </div>
            </div>
          </fieldset>
          <div className='flex flex-row gap-[10px] mt-4'>
            <Dialog.Close>
              <Button variant='contained' color='primary' content='Apply' />
            </Dialog.Close>
            <Dialog.Close>
              <Button variant='contained' color='secondary' content='Cancel' />
            </Dialog.Close>
          </div>
          <Dialog.Close>
            <button className={styles.IconButton} aria-label='Close'>
              <CrossCircledIcon className='w-6 h-6 text-dove-500' />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Filter;
