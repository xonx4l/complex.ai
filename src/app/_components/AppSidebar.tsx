import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
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
    title: 'Home',
    icon: GalleryHorizontalEnd,
    path: '/'
  },
  {
    title: 'Home',
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
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
    )
}

export default AppSidebar