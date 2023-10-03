import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { itemsCover } from "@/src/app/components/ItemsSimpleShop/images/images";
import price from "@/public/images/shops/price.png";
import { toast } from "react-toastify";
import ModalBuy from "../../ModalBuyAvatar/app.modal-buy";

const CoverShop = ({
  itemsPerPage,
  data,
  filterStatus,
}: {
  itemsPerPage: number;
  data: Array<any>;
  filterStatus: string;
}) => {
  const [dataFilter, setDataFilter] = useState<Array<any>>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [idCoverDetail, setIdCoverDetail] = useState<number>();

  const handleModalBuyCoverShop = async (id: number) => {
    setIsOpenModal(!isOpenModal);
    setIdCoverDetail(id);
  };

  useEffect(() => {
    setDataFilter(data);
  }, [data]);
  const items = [...dataFilter];
  // console.log("items", items);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  const filterStatusItem = () => {
    switch (filterStatus) {
      case "All":
        setDataFilter(data);
        break;
      case "Owned":
        setDataFilter(data.filter((item, index) => item.user_inventory));
        break;
      case "Buy":
        setDataFilter(data.filter((item, index) => !item.user_inventory));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    filterStatusItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatus]);
  return (
    <>
      <div className="grid grid-cols-2 gap-4  animate-translateFadeIn transition-all">
        {currentItems.map((item, inx) => (
          <div key={inx} className="mt-[27px]">
            <div className="w-full p-[10px] bg-pink-900 rounded-[30px] border border-pink-400">
              <div className="w-full h-[204px]">
                {item?.url && (
                  <Image
                    priority={true}
                    src={item?.url}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-[20px] w-full h-full object-cover"
                  />
                )}
              </div>
              <h3 className="font-lato font-bold text-base text-white mt-2">
                {item.name}
              </h3>
              <div className="flex justify-end items-center gap-2 mt-2">
                {item.price > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="font-nunito font-extrabold text-sm text-white">
                      {item.price === 0 ? "" : item.price}
                    </span>
                    <div>
                      <Image priority={true} src={price} alt="" />
                    </div>
                  </div>
                )}

                <div
                  className={`w-[96px] h-[32px] flex justify-center items-center rounded-[30px] border border-violet-50  text-white transition-colors ${
                    item.user_inventory
                      ? "bg-[#350F1E]"
                      : "bg-violet-700 cursor-pointer hover:bg-[#350F1E]"
                  }`}
                >
                  {item?.user_inventory ? (
                    <button
                      onClick={() => toast.warning("Cover already owned")}
                      className="w-full h-full"
                    >
                      Owned
                    </button>
                  ) : (
                    <button
                      onClick={() => handleModalBuyCoverShop(item?.id)}
                      className="w-full h-full"
                    >
                      Buy
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalBuy
        title="Cover"
        openModal={isOpenModal}
        onClick={(id: number) => handleModalBuyCoverShop(id)}
        id={idCoverDetail}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={7}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center gap-[32px] text-white font-nunito font-bold text-sm mt-10"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextClassName="w-[8px] h-[14px]"
        nextLinkClassName="w-[24px] h-[24px]  rounded-[5px] bg-violet-900 shadow-[#8052C7_-3px_-3px_3px_0px_inset] px-2 py-1"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="text-pink-400"
        previousClassName="w-[8px] h-[14px]"
        previousLinkClassName="w-[24px] h-[24px]  rounded-[5px] bg-violet-900 shadow-[#8052C7_-3px_-3px_3px_0px_inset] px-2 py-1 "
        disabledLinkClassName="disabled:opacity-70 cursor-default"
      />
    </>
  );
};

export default CoverShop;
