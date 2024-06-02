import {
    AppShell,
    Burger,
    Button,
    Center,
    Flex,
    Stack,
    Text,
    TextInput,Badge
  } from "@mantine/core";
  import { NavLink, Navigate, Outlet, Route } from "react-router-dom";
  import { useDisclosure } from "@mantine/hooks";
import { ShoppingCart,User } from 'lucide-react';
  // import FilterAndSort from "../components/FilterAndSort";
  const AppLayout = () => {
    const [opened, { toggle }] = useDisclosure();
    return (
      <AppShell
        header={{ height: 50 }}
        navbar={{
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header p="sm">
          <Flex h="100%" align="center">
            <Flex flex={1} justify="flex-start">
            <NavLink to="/" style={{ fontSize: 20, fontWeight: 600 }}>
            AirtribeBuy
          </NavLink>
            <TextInput visibleFrom="sm" placeholder="Search product" ml={40} flex={0.5}/>
          </Flex>
            <Flex visibleFrom="sm" gap={10} ml="auto">
            <Button variant="outline"  size="xs" mr={10}>
            <Badge
                size="xs"
                color="red"
                variant="filled"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 4,
                }}>2
              </Badge>
             <ShoppingCart />
             </Button>
              <Button variant="outline"  size="xs">
              <User />
              </Button>
            </Flex>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Flex>
        </AppShell.Header>
  
        <AppShell.Navbar hiddenFrom="sm" p="md">
          Navbar
        </AppShell.Navbar>
  
        <AppShell.Main>
          {/* <FilterAndSort /> */}
          <Outlet />
        </AppShell.Main>
      </AppShell>
    );
  };
  
  export default AppLayout;
  