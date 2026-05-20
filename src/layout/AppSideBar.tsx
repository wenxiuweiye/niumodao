import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import MarkdownLineIcon from "@iconify-react/ri/markdown-line";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function AppSidebar({
  mdListSidebarData,
  route,
}: {
  mdListSidebarData: { url: string; title: string }[];
  route: string;

}) {
  return (
    <Sidebar>
      <SidebarHeader className="p-6 gap-6">
        <div className="flex items-center gap-2">
          <AnimatedThemeToggler className="cursor-pointer " />
          <span className="lg:text-xl font-bold font-serif cursor-pointer hover:text-primary transition-all">
            NIUMODAO
          </span>
        </div>
        <div className="w-full h-0.5 bg-border"></div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem className="text-xs text-muted-foreground">
              <SidebarMenuButton>博客</SidebarMenuButton>
            </SidebarMenuItem>
            {mdListSidebarData.map((item: any, idx: number) => (
              <SidebarMenuItem key={item.url ?? idx}>
                <SidebarMenuButton
                  onClick={() => window.navigation.navigate(`${item.url}`)}
                  className={item.url === route ? "bg-primary text-background hover:bg-primary/80 hover:text-background" : ""} 
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
  route
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
      <main className="w-full flex m-12 ">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
