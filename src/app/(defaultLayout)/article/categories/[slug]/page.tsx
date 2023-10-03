"use client";
import ArticleItem from "@/src/app/components/Article/ArticleItem/app.article-item";
import { getArticlesByCategorySlug } from "@/src/app/services/article.service";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const ArticleCategory = ({ params }: { params: { slug: string } }) => {
  const [dataArticleCategory, setDataArticleCategory] = useState<any>();
  const getdata = () => {
    getArticlesByCategorySlug(params?.slug).then((response) => {
      setDataArticleCategory(response?.data);
    });
  };
  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug]);
  const { articleCategory, articles } = dataArticleCategory || {};

  // console.log("articleCategory", articleCategory);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 4;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = articles?.rows.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles?.rows.length / 4);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 4) % articles?.rows.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <div className="w-full min-h-[2000px] flex flex-col gap-4">
      <div className="flex justify-center items-center text-center bg-gradient-to-t from-[#F265E4] via-#C4B5FD to-[#979BFF] w-[420px] h-[94px] rounded-[10px] font-nunito font-bold leading-[39.px] text-white text-[28px]">
        {articleCategory?.label}
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        {currentItems?.map((article: any, index: number) => (
          <ArticleItem key={index} article={article} className={"col-span-1"} />
        ))}
        <div className="col-span-2 mt-[20px]">
          {currentItems?.length > 3 && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCategory;
