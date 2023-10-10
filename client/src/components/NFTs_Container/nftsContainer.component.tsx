import React, { useContext } from "react";
import NFTsContainerProps from "./nftsContainer.interface";
import Search from "../Search/search.component";
import { TableContext } from "@/context/tableContext";
import Button from "../Button/button.component";
import PlusIcon from "@/assets/icons/plus-icon-Gray-600.svg";
import EditPrice from "@/assets/icons/price_change.svg";
import Filter from "../Filter/filter.component";
import TableComponent from "../Table/table.component";
import { useRouter } from "next/navigation";
import NFTType from "@/types/nft";

function NFTsContainer(props: NFTsContainerProps) {
  const { title } = props;
  const { dataTable } = useContext(TableContext);
  const router = useRouter();

  const addToCampaignsClick = () => {
    router.push("/campaigns/selectNFTs/selected");
  };

  const handleChange = (val: NFTType[]) => {
    // console.log(val);
  };
  return (
    <div className='px-6 pb-6 rounded-xl w-full border border-Gray-200 flex flex-col gap-4'>
      <div className='header'>
        <div className='w-full flex flex-row justify-between items-center py-5'>
          <span className='font-semibold text-lg text-dark-100'>{title}</span>

          {dataTable && (
            <div className='flex flex-row gap-2 items-center'>
              <Button
                startIcon={PlusIcon}
                variant='text'
                content='Select NFTs'
                color='primary'
              />
              <Button
                startIcon={EditPrice}
                variant='text'
                content='Edit Price'
                color='primary'
              />
              <Button
                variant='contained'
                content='Add to Campaign'
                color='primary'
                onClick={addToCampaignsClick}
              />
            </div>
          )}
        </div>
        <div className='py-3 border-y border-Gray-200 flex flex-row justify-between items-center'>
          <Search placeholder='Search' />

          <div className='flex flex-row justify-end items-center gap-[10px]'>
            {dataTable && <Filter />}
          </div>
        </div>
      </div>

      <div className='body'>
        <TableComponent
          value={dataTable}
          checkbox={true}
          remove={false}
          onValueChange={handleChange}
        />
      </div>
    </div>
  );
}

export default NFTsContainer;
