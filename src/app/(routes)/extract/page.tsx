import AccountStatement from "@/app/components/accountStatement/AccountStatement";

export default function Extract() {
  return (
    <div className="flex gap-3 w-full">
      <AccountStatement destinationPageName="extract-page" />
    </div>
  );
}
