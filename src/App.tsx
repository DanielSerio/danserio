import { AppShell, MantineProvider } from "@mantine/core";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LINKS, THEME } from "#const";
import { AppFooter, AppHeader } from "#core/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import E404Page from "#e404/pages";

const client = new QueryClient();

const bodyStyles = {
  background: "var(--mantine-color-body)",
};

function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider defaultColorScheme="dark" theme={THEME}>
        <HashRouter>
          <AppShell header={{ height: 48 }} footer={{ height: 36 }}>
            <AppShell.Header h={48}>
              <AppHeader />
            </AppShell.Header>
            <AppShell.Main id="main" style={bodyStyles}>
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
                <Route path="*" element={<E404Page />} />
              </Routes>
            </AppShell.Main>
            <AppShell.Footer zIndex={-1}>
              <AppFooter />
            </AppShell.Footer>
          </AppShell>
        </HashRouter>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
