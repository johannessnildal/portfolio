import React from 'react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowBigDownIcon, ArrowBigLeftIcon, ArrowBigRightIcon, ArrowBigUpIcon, ExternalLink, List, SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '../ui/button';

const components: { title: string; href: string; description: string }[] = [
    {
      title: "Next.js",
      href: "https://nextjs.org/",
      description: "The framework i use for most websites and web applications.",
    },
    {
      title: "Tailwind",
      href: "https://tailwindcss.com/",
      description: "What i use for styling and design in all my Next.js projects.",
    },
    {
      title: "Shadcn/ui",
      href: "https://ui.shadcn.com/",
      description: "Makes styling simple with reusable components. This site uses it too!",
    },
    {
      title: "MongoDB",
      href: "https://www.mongodb.com/",
      description: "I use Mongo to make practical databases in my web applications.",
    },
    {
      title: "Vercel",
      href: "https://vercel.com/",
      description: "Deploying my applications on Vercel is very intuitive with Next.js.",
    },
  ]

const NavBarLinks = () => {
  return (
    <div className='hidden md:block'>
    <NavigationMenu className='dark'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='opacity-70 hover:opacity-100 duration-300 ease-in-out font-light'>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <a
                        className="backdrop-blur cursor-pointer flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/30 hover:from-muted/50 hover:to-muted to-muted/60 border-muted/60 hover:border-muted/90 border-[1px] p-6"
                      >
                      <h1 className='text-sm opacity-20 md:hidden lg:block'>Highlighted Project</h1>
                      <div className="mb-4 mt-auto text-lg font-medium flex flex-row items-center">
                        <Image
                          src="/icons/yoomlogo.svg"
                          alt="Portfolio"
                          width={40}
                          height={40}
                        />
                        <h1 className='font-extrabold'>
                          Yoom
                        </h1>
                      </div>
                      <p className='text-sm opacity-40'>
                        A Zoom-inspired web application. Create, schedule and join meetings.
                      </p>
                    </a>
                    </AlertDialogTrigger>

                      <AlertDialogContent className='dark'>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Alert!</AlertDialogTitle>
                        <AlertDialogDescription>
                          To access Yoom, you will need create an account on the site. This data is kept safe by Clerk Auth, but this is a heads up. Continue?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction asChild>
                            <Link href='https://yoom-liart-delta.vercel.app' className='gap-2' target="_blank">
                              <SquareArrowOutUpRight size='16'/>
                              Continue
                            </Link>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                </NavigationMenuLink>
              </li>
                <ListItem href="https://johannessnildal.github.io/manage-landing-page/" title="Manage" target="_blank">        
                  Just a landing page as part of a challenge from Frontend Mentor.
                </ListItem>
              <ListItem href="/" title="Coming soon..." target="_blank">
                As i complete more projects, they will be added here.
              </ListItem>
              <ListItem href="/" title="Coming soon..." target="_blank">
                As i complete more projects, they will be added here.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='opacity-70 hover:opacity-100 duration-300 ease-in-out font-light'>Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    target="_blank"
                  >
                    {component.description}
                  </ListItem>
                ))}
                <ListItem href="/tools" title="And more..." className='h-full bg-zinc-900'>
                  <div className='flex flex-row gap-4'>
                  <p>I use several other tools too. <br />View more by clicking!</p>
                  <ExternalLink size='14' />
                  </div>
                </ListItem>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavBarLinks