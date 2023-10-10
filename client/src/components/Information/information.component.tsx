"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import Calendar from "@/components/Calendar/calendar.component";
import Card from "@/components/Card/card.component";
import Input from "@/components/Input/input.component";
import ToolTip from "@/components/Tooltip/tooltip.component";
import Image from "next/image";
import InforIcon from "@/assets/icons/infor-icon.svg";
import {
  campaignNameStore,
  dailyBudgetStore,
  startDateStore,
  endDateStore,
} from "@/stores/campaigns.store";
import { KeyboardEvent, useEffect, useRef, useSyncExternalStore } from "react";
import { DateType } from "@/types/types";

function Information() {
  const campaignName = useSyncExternalStore(
    campaignNameStore.subscribe,
    campaignNameStore.getSnapshot,
    () => ""
  );
  const dailyBudget = useSyncExternalStore(
    dailyBudgetStore.subscribe,
    dailyBudgetStore.getSnapshot,
    () => 0
  );
  const startDate = useSyncExternalStore(
    startDateStore.subscribe,
    startDateStore.getSnapshot,
    () => ({ yyyy: 0, mmmm: 0, dddd: 0 })
  );
  const endDate = useSyncExternalStore(
    endDateStore.subscribe,
    endDateStore.getSnapshot,
    () => ({ yyyy: 0, mmmm: 0, dddd: 0 })
  );

  const campaignNameRef = useRef<HTMLInputElement>(null);
  const dailyBudgetRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (campaignNameRef.current) {
      campaignNameRef.current.value = campaignName;
    }
    if (dailyBudgetRef.current) {
      dailyBudgetRef.current.value = dailyBudget.toString();
    }
  }, []);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    let val: string;
    val = (e.target as HTMLInputElement).value;
    campaignNameStore.addName(val);
  };

  const dailyBudgetKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    let val: number;
    val = Number((e.target as HTMLInputElement).value);
    dailyBudgetStore.addDailyBudget(val);
  };

  const startDateChange = (val: DateType) => {
    startDateStore.getStartDate(val);
  };

  const endDateChange = (val: DateType) => {
    endDateStore.getEndDate(val);
  };

  return (
    <>
      <Card header='Basic Information'>
        <div className='flex flex-col gap-5'>
          <div>
            <label htmlFor='campaign-name'>Campaign name</label>
            <div className='input-wrapper'>
              <Input
                type='text'
                placeholder='Name your campaign'
                id='campaign-name'
                onKeyUp={handleKeyUp}
                name='campaign-name'
                ref={campaignNameRef}
              />
            </div>
          </div>

          <div className='w-full grid grid-cols-3 gap-[35px]'>
            <div className='w-full flex flex-col gap-3'>
              <div className='flex flex-row gap-1 items-center'>
                <span className='text-base font-normal text-dove-600'>
                  Daily budget
                </span>
                <ToolTip content='Daily budget refers to the maximum amount of money you are willing to spend on a particular activity or campaign per day.'>
                  <Image
                    src={InforIcon}
                    alt='infor icon'
                    className='w-[18px]'
                  />
                </ToolTip>
              </div>

              <div className='border border-Gray-200 rounded-xl py-1 px-[5px] flex flex-row gap-[10px] w-full'>
                <span className='rounded-tl-[10px] rounded-bl-[10px] font-medium text-base text-dark-600 py-[18px] pr-[20px] pl-5 bg-alto-200'>
                  USD
                </span>
                <Input
                  type='number'
                  onKeyUp={dailyBudgetKeyUp}
                  ref={dailyBudgetRef}
                />
              </div>
            </div>

            <div className='w-full flex flex-col gap-3'>
              <div className='flex flex-row gap-1 items-center'>
                <span className='text-base font-normal text-dove-600'>
                  Start date
                </span>
                <ToolTip content='The start date of a campaign refers to the date when the campaign will begin running. When creating a campaign, you will need to set a start date for the campaign, which is the date that you want the campaign to start running and be visible to your target audience.'>
                  <Image
                    src={InforIcon}
                    alt='infor icon'
                    className='w-[18px]'
                  />
                </ToolTip>
              </div>
              <Calendar
                placeholder='Start date'
                onChange={startDateChange}
                valueSelected={startDate}
              />
            </div>

            <div className='w-full flex flex-col gap-3'>
              <div className='flex flex-row gap-1 items-center'>
                <span className='text-base font-normal text-dove-600'>
                  End date
                </span>
                <ToolTip content='The end date of a campaign refers to the date when the campaign will stop running. When creating a campaign, you will need to set an end date, which is the date that you want the campaign to stop running and no longer be visible to your target audience.'>
                  <Image
                    src={InforIcon}
                    alt='infor icon'
                    className='w-[18px]'
                  />
                </ToolTip>
              </div>
              <Calendar
                placeholder='End date'
                onChange={endDateChange}
                valueSelected={endDate}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Information;
