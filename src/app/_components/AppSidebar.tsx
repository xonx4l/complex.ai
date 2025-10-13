import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import Image from 'next/image';

function AppSidebar() {
    return (
        <Sidebar>
      <SidebarHeader className='bg-accent' />
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