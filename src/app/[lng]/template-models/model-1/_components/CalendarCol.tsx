/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"creamy"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#D20A2E"}, "dark":{"cal-brand":"#D20A2E"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
    <>
    <div className="mt-3 md:mt-3">
        <div className="relative flex flex-col md:flex-row w-[calc(100%-1rem)] mx-auto max-w-375 gap-10 p-2 md:p-3 bg-white rounded-[30px]">
          <Cal namespace="creamy"
            calLink="kouki-tech-adgae6/creamy"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}}/>
        </div>
    </div>
    </>
  )
};
  
  
  

  

