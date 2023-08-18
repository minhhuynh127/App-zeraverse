import Footer from "../components/Footer/app.footer";
import TopBar from "../components/TopBar/app.top-bar";
import TopBarLogin from "../components/TopBarLogin/app.tap-bar-login";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-body object-cover bg-cover">
      <div className="flex px-[13px] py-[16px] gap-4">
        <div className="max-h-[314px]">
          <TopBar />
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
