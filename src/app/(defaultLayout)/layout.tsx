import Footer from "../components/Footer/app.footer";
import TopBar from "../components/TopBar/app.top-bar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="flex px-[13px] py-[16px] gap-4 ">
        <div className="max-h-[314px]">
          <TopBar />
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
