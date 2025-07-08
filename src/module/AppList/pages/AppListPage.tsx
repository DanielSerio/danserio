import { AppCard } from "#app-list/components/AppCard";
import { AppListCardGrid } from "#app-list/components/AppListCardGrid";
import { getAppNavList } from "#core/utilities";
import "#app-list/styles/output/app-list.scss";

export function AppListPage() {
  const appList = getAppNavList();

  if (window) {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <>
      <AppListCardGrid>
        {appList.map(({ href, ...props }) => {
          return <AppCard key={href} href={href} {...props} />;
        })}
      </AppListCardGrid>
    </>
  );
}
