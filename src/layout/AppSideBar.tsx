import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import MarkdownLineIcon from "@iconify-react/ri/markdown-line";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import CloseLineIcon from "@iconify-react/ri/close-line";
import React from "react";

export function AppSidebar({
  mdListSidebarData,
  route,
}: {
  mdListSidebarData: { url: string; title: string }[];
  route: string;
}) {
  const [searchContent, setSearchContent] = React.useState("");

  return (
    <Sidebar>
      <SidebarHeader className="p-6 gap-6">
        <div className="flex items-center gap-2">
          <AnimatedThemeToggler className="cursor-pointer " />
          <a
            href={route.slice(0, 3)}
            className="lg:text-xl font-bold font-serif cursor-pointer hover:text-primary transition-all"
          >
            NIUMODAO
          </a>
        </div>
        <div className="w-full h-0.5 bg-border"></div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem className="text-xs text-muted-foreground  ">
              <Input
                placeholder="检索博客名称"
                value={searchContent}
                onChange={(e) => setSearchContent(e.target.value)}
              />
              <SidebarMenuAction>
                {searchContent ? (
                  <CloseLineIcon
                    onClick={() => setSearchContent("")}
                  ></CloseLineIcon>
                ) : null}
              </SidebarMenuAction>
            </SidebarMenuItem>

            <SidebarMenuItem className="text-xs text-muted-foreground ">
              {searchContent &&
                mdListSidebarData
                  .filter((item: any) => item.title.includes(searchContent))
                  .map((item: any) => (
                    <SidebarMenuButton
                      onClick={() => window.navigation.navigate(`${item.url}`)}
                      className={
                        item.url === route
                          ? "underline text-primary"
                          : ""
                      }
                    >
                      <span>
                        <MarkdownLineIcon />
                      </span>
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  ))}
            </SidebarMenuItem>

            <SidebarMenuItem className="text-xs text-muted-foreground">
              <SidebarMenuButton
                onClick={() =>
                  window.navigation.navigate(`${route.slice(0, 3)}/blog`)
                }
              >
                博客
              </SidebarMenuButton>
            </SidebarMenuItem>
            {mdListSidebarData.map((item: any, idx: number) => (
              <SidebarMenuItem key={item.url ?? idx}>
                <SidebarMenuButton
                  onClick={() => window.navigation.navigate(`${item.url}`)}
                  className={
                    item.url === route
                      ? "bg-primary text-white hover:bg-primary/80 hover:text-white/80"
                      : ""
                  }
                >
                  <span>
                    <MarkdownLineIcon />
                  </span>
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export function AppSidebarInset({
  children,
  mdListSidebarData,
  route,
}: {
  children: React.ReactNode;
  mdListSidebarData: {
    url: string;
    title: string;
  }[];
  route: string;
}) {
  return (
    <SidebarProvider>
      <AppSidebar route={route} mdListSidebarData={mdListSidebarData} />
      <main className="w-full flex m-12 gap-12">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
