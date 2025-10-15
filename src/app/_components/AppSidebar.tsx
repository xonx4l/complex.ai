import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import Image from 'next/image';
import { Compass, GalleryHorizontalEnd, LogIn, Search } from 'lucide-react';

const MenuOptions=[
  {
    title: 'Home',
    icon: Search,
    path: '/'
  },
  {
    title: 'Discover',
    icon: Compass,
    path: '/'
  },
  {
    title: 'Library',
    icon: GalleryHorizontalEnd,
    path: '/'
  },
  {
    title: 'Sign in',
    icon: LogIn,
    path: '/'
  },
]
function AppSidebar() {
    return (
        <Sidebar>
      <SidebarHeader className='bg-accent flex items-center py-5'/>
      <Image src={'/complexlogofix.png'} alt='logo' width={260} height={20} />
      <SidebarContent className='bg-accent'>
        <SidebarGroup />
        <SidebarContent>
          <SidebarMenu>
            {MenuOptions.map((menu,index) => (
              <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild className={'p-5'}>
                 <a href={menu.path} className = ''>
                   <menu.icon />
                   <span className='text-lg'> {menu.title} </span>
                 </a>
              </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
    )
}

export default AppSidebar