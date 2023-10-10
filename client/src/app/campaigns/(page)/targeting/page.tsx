/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Card from "@/components/Card/card.component";
import Radio from "@/components/Radio/radio.component";
import styles from "./targeting.module.css";
import Button from "@/components/Button/button.component";
import Plus from "@/assets/icons/plus.svg";
import Input from "@/components/Input/input.component";
import Selected from "@/components/Selected/selected.component";
import {
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { DemographicsType, LocationType } from "@/types/types";
import {
  demographicsStore,
  keywordsStore,
  locationsStore,
  topicsStore,
} from "@/stores/targeting.store";
import {
  emptyAge,
  emptyAgeRange,
  emptyGender,
  emptyLocation,
} from "@/demo/Empty_Value/emptyValue";
import PageHeader from "@/components/Page_Header/pageHeader.component";
import LocationsSelected from "@/components/Location_Selected/locationSelected.component";
import RadioButton from "@/components/Radio_Button/radioButton.component";
import SingleSelect from "@/components/Single_Select/singleSelect.component";

function Targeting() {
  const keywordRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const [locationsSelected, setLocationsSelected] = useState<LocationType[]>(
    []
  );
  const [demographicsSelected, setDemographicsSelected] =
    useState<DemographicsType>({
      gender: "Any",
      age: "All",
      ageRange: undefined,
    });

  const locations = useSyncExternalStore(
    locationsStore.subscribe,
    locationsStore.getSnapshot,
    () => ""
  );
  const demographics = useSyncExternalStore(
    demographicsStore.subscribe,
    demographicsStore.getSnapshot,
    () => []
  );
  const keywords = useSyncExternalStore(
    keywordsStore.subscribe,
    keywordsStore.getSnapshot,
    () => []
  );
  const topics = useSyncExternalStore(
    topicsStore.subscribe,
    topicsStore.getSnapshot,
    () => []
  );

  useEffect(() => {
    let val = emptyLocation.find((item) => item.content === locations);
    setLocationsSelected(val?.value || []);
  }, [locations]);

  const handleLocationsChange = (value: string) => {
    locationsStore.getLocation(value);
  };

  const handleGenderChange = (val: string) => {
    let _demographicsSelected = { ...demographicsSelected };
    _demographicsSelected.gender = val;
    setDemographicsSelected(_demographicsSelected);
  };

  const handleAgeChange = (val: string) => {
    let _demographicsSelected = { ...demographicsSelected };
    _demographicsSelected.age = val;
    setDemographicsSelected(_demographicsSelected);
  };

  const handleAgeRangeChange = (val: string) => {
    let _demographicsSelected = { ...demographicsSelected };
    let ageChange: string = "";

    switch (val) {
      case "Between 18 and 24 years old":
        ageChange = "18-24";
        break;
      case "Between 25 and 34 years old":
        ageChange = "25-34";
        break;
      case "Between 35 and 44 years old":
        ageChange = "35-44";
        break;
      case "Between 55 and 64 years old":
        ageChange = "55-64";
        break;
      case "65 years old and beyond":
        ageChange = "over 65";
        break;
      default:
        break;
    }

    _demographicsSelected.ageRange = ageChange;
    setDemographicsSelected(_demographicsSelected);
  };

  const handleAddClick = () => {
    let val: string;

    if (demographicsSelected.age === "All") {
      val = `Gender: ${demographicsSelected.gender}, Age: ${demographicsSelected.age}`;
    } else {
      val = `Gender: ${demographicsSelected.gender}, Age range: ${demographicsSelected.ageRange}`;
    }
    demographicsStore.addDemographics(val);
    setDemographicsSelected({
      gender: "Any",
      age: "All",
      ageRange: undefined,
    });
  };

  const handleKeywordKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    let val = (e.target as HTMLInputElement).value;
    if (e.key === "Enter" && keywordRef.current) {
      keywordsStore.addKeyword(val);
      keywordRef.current.value = "";
    }
  };

  const handleRemoveKeywordClick = (index: number) => {
    keywordsStore.removeKeyword(index);
  };

  const handleTopicKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    let val = (e.target as HTMLInputElement).value;
    if (e.key === "Enter" && topicRef.current) {
      topicsStore.addTopic(val);
      topicRef.current.value = "";
    }
  };

  const handleRemoveTopicClick = (index: number) => {
    topicsStore.removeTopic(index);
  };

  const handleRemoveDemographics = (index: number) => {
    demographicsStore.removeDemographics(index);
  };

  const Display = useMemo(() => {
    return <div>Display</div>;
  }, []);

  return (
    <div className='flex flex-col gap-5'>
      <PageHeader content='Targeting' />

      <Card header='Location Targeting'>
        <div className='flex flex-col gap-[25px]'>
          <div className='flex flex-col gap-[10px]'>
            <label>Select locations to target</label>
            <Radio
              value={emptyLocation}
              onValueChange={handleLocationsChange}
              defaultValue={locations}
            />
          </div>
          {locationsSelected.length !== 0 && (
            <LocationsSelected value={locationsSelected} />
          )}
        </div>
      </Card>

      <Card header='Demographics'>
        <div className='flex flex-col gap-[25px]'>
          <div className='flex flex-row gap-12'>
            <div>
              <RadioButton
                label='Gender'
                value={emptyGender}
                onValueChange={handleGenderChange}
                defaultValue={demographicsSelected.gender}
              />
            </div>

            <div className='flex flex-col gap-3 w-full'>
              <label className='m-0'>Age</label>

              <div className='flex flex-row gap-5 w-full'>
                <Radio
                  value={emptyAge}
                  className={styles.Age}
                  itemClassName={styles.AgeItem}
                  inputClassName={styles.AgeInput}
                  defaultValue={emptyAge[0].content}
                  onValueChange={handleAgeChange}
                />

                {demographicsSelected.age !== "All" && (
                  <SingleSelect
                    placeholder='Age range'
                    ariaLabel='age-range'
                    value={emptyAgeRange}
                    onValueChange={handleAgeRangeChange}
                  />
                )}

                <Button
                  content='Add'
                  endIcon={Plus}
                  variant='contained'
                  color='primary'
                  onClick={handleAddClick}
                />
              </div>
            </div>
          </div>
          {demographics.length !== 0 && (
            <Selected
              title='selected'
              value={demographics}
              removeValue={true}
              onClick={handleRemoveDemographics}
            />
          )}
        </div>
      </Card>

      <Card header='Keywords'>
        <div className='flex flex-col gap-3'>
          <div>
            <label>Select up to 10 keywords for Ads optimization</label>
            <div className='input-wrapper'>
              <Input
                id='keywords'
                type='text'
                placeholder='Enter keywords to target'
                onKeyUp={handleKeywordKeyUp}
                ref={keywordRef}
              />
            </div>
          </div>
          {keywords.length !== 0 && (
            <Selected
              title='selected'
              value={keywords}
              removeValue={true}
              onClick={handleRemoveKeywordClick}
            />
          )}
        </div>
      </Card>

      <Card header='Topics'>
        <div className='flex flex-col gap-3'>
          <div>
            <label>Select topics for Ads optimization</label>
            <div className='input-wrapper'>
              <Input
                id='topics'
                type='text'
                placeholder='Enter topics for targeting'
                ref={topicRef}
                onKeyUp={handleTopicKeyUp}
              />
            </div>
          </div>
          {topics.length !== 0 && (
            <Selected
              title='selected'
              value={topics}
              removeValue={true}
              onClick={handleRemoveTopicClick}
            />
          )}
        </div>
      </Card>
    </div>
  );
}

export default Targeting;
