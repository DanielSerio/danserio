import { AppShell, MantineProvider } from "@mantine/core";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LINKS, THEME } from "#const";
import { AppFooter, AppHeader } from "#core/components";

const bodyStyles = {
  background: "var(--mantine-color-body)",
  marginBottom: 36,
};

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={THEME}>
      <HashRouter>
        <AppShell header={{ height: 48 }} footer={{ height: 36 }}>
          <AppShell.Header h={48}>
            <AppHeader />
          </AppShell.Header>
          <AppShell.Main style={bodyStyles}>
            <Routes>
              {LINKS.map(({ href, page: Page, children }) => {
                if (children && children.length) {
                  return (
                    <>
                      <Route key={href} path={href} element={<Page />} />
                      {children.map((child) => (
                        <Route
                          key={`${href}${child.href}`}
                          path={`${href}${child.href}`}
                          element={<child.page />}
                        />
                      ))}
                    </>
                  );
                }

                return <Route key={href} path={href} element={<Page />} />;
              })}
            </Routes>
          </AppShell.Main>
          <AppShell.Footer zIndex={-1}>
            <AppFooter />
          </AppShell.Footer>
        </AppShell>
      </HashRouter>
    </MantineProvider>
  );
}

export default App;
