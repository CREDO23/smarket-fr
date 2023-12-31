"use client";

import Link from "next/link";

export default function ProductsLayout({
  children,
  currentTab,
}: {
  children: JSX.Element;
  currentTab: string;
}) {
  const tabItems = ["all", "new", "productDetails"];

  return (
    <div className="w-full h-full flex flex-col items-center gap-2">
      <div className="w-full text-sm border-b shrink-0 h-10 flex items-end pb-[.6rem] justify-center gap-6 ">
        {tabItems.map((tab) => {

          return tab == 'productDetails' ? <span key={'product-details'}
          className={` uppercase cursor-not-allowed  relative  ${
            tab == currentTab
              ? "text-primary-color after:bg-primary-color after:h-[2px] after:w-full"
              : "text-black/30 after:bg-black/30"
          }   after:absolute after:left-0 after:-bottom-[13px] `}
        >
          Product details
        </span> : <Link
          href={

              tab == "all"
              ? "/seller/dashboard/products"
              : `/seller/dashboard/products/${tab}`
          }
          key={`${tab}-products`}
        >
          <span
            className={` uppercase cursor-pointer hover:text-primary-color/80 hover:after:bg-primary-color/80  relative  ${
              tab == currentTab
                ? "text-primary-color after:bg-primary-color after:h-[2px] after:w-full"
                : "text-black after:bg-black"
            }   after:absolute after:left-0 after:-bottom-[13px] `}
          >
            {`${tab == 'new' ? '+' : ''}`}  {tab} {`product${tab == 'all' ? 's' : ''}`}
          </span>
        </Link>
        })}
      </div>
      <div className="w-full overflow-hidden h-[calc(100%-2.5rem)]">{children}</div>
    </div>
  );
}
