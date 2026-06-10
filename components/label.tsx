import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  const isQuoteOnly = !amount || parseFloat(amount) === 0;
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label",
        {
          "lg:px-20 lg:pb-[35%]": position === "center",
        },
      )}
    >
      <div className="flex items-center rounded-full border border-brand-grey/30 bg-white/95 p-1 text-xs font-semibold text-brand-charcoal backdrop-blur-md">
        <h3 className="mr-4 line-clamp-2 grow pl-2 leading-none tracking-tight">
          {title}
        </h3>
        {isQuoteOnly ? (
          <span className="flex-none rounded-full bg-brand-red px-3 py-2 text-white uppercase tracking-wider">
            Quote
          </span>
        ) : (
          <Price
            className="flex-none rounded-full bg-brand-red p-2 text-white"
            amount={amount}
            currencyCode={currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline"
          />
        )}
      </div>
    </div>
  );
};

export default Label;
