<script setup lang="ts">
import {Baby, BookOpen, LogOut, Menu} from 'lucide-vue-next'
import {Button} from '@/app/components/ui/button'
import {Sheet, SheetContent, SheetTrigger} from '@/app/components/ui/sheet'
import {MenuItem} from "@/app/components/ui/menu-item";
import {Link} from '@inertiajs/vue3';
import {inject, ref} from "vue";
import {PUSH_NOTIFICATIONS} from "@/app/injection-keys";

const sheetOpen = ref(false)
const pushNotificationService = inject(PUSH_NOTIFICATIONS)!;
</script>

<template>
    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div class="hidden border-r bg-muted/40 md:block">
            <div class="flex h-full max-h-screen flex-col gap-2">
                <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <a href="/" class="flex items-center gap-2 font-semibold">
                        <!--                        <Baby class="h-6 w-6" />-->
                        <span class="">{{ $page.props.appName }}</span>
                    </a>
                    <!--                    <Button variant="outline" size="icon" class="ml-auto h-8 w-8">-->
                    <!--                        <Bell class="h-4 w-4" />-->
                    <!--                        <span class="sr-only">Toggle notifications</span>-->
                    <!--                    </Button>-->
                </div>
                <div class="flex-1">
                    <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
                        <!--                        <MenuItem-->
                        <!--                            route-name="dashboard"-->
                        <!--                        >-->
                        <!--                            <Home class="h-4 w-4" />-->
                        <!--                            Dashboard-->
                        <!--                        </MenuItem>-->
                        <MenuItem
                            route-name="babies.show"
                        >
                            <Baby class="h-4 w-4"/>
                            Babies
                        </MenuItem>
                        <MenuItem
                            route-name="baby_actions.show"
                        >
                            <BookOpen class="h-4 w-4"/>
                            Baby Actions
                        </MenuItem>
                    </nav>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <Sheet v-model:open="sheetOpen">
                    <SheetTrigger as-child>
                        <Button
                            variant="outline"
                            size="icon"
                            class="shrink-0 md:hidden"
                        >
                            <Menu class="h-5 w-5"/>
                            <span class="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" class="flex flex-col">
                        <nav class="grid gap-2 text-lg font-medium">
                            <MenuItem
                                route-name="babies.show"
                                :on-success="() => {sheetOpen = false}"
                            >
                                <Baby class="h-4 w-4"/>
                                Babies
                            </MenuItem>
                            <MenuItem
                                :on-success="() => {sheetOpen = false}"
                                route-name="baby_actions.show"
                            >
                                <BookOpen class="h-4 w-4"/>
                                Baby Actions
                            </MenuItem>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div class="w-full flex-1">
                    <!--                    <form>-->
                    <!--                        <div class="relative">-->
                    <!--                            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />-->
                    <!--                            <Input-->
                    <!--                                type="search"-->
                    <!--                                placeholder="Search products..."-->
                    <!--                                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"-->
                    <!--                             />-->
                    <!--                        </div>-->
                    <!--                    </form>-->
                </div>
                <span class="text-sm">Hi, {{ $page.props.auth.user.name }}</span>
                <Link @click="pushNotificationService.disconnect().catch(console.error);" :href="route('logout')" method="post" as="button" type="button">
                    <LogOut/>
                </Link>
                <!--                <DropdownMenu>-->
                <!--                    <DropdownMenuTrigger as-child>-->
                <!--                        <Button variant="secondary" size="icon" class="rounded-full">-->
                <!--                            <CircleUser class="h-5 w-5" />-->
                <!--                            <span class="sr-only">Toggle user menu</span>-->
                <!--                        </Button>-->
                <!--                    </DropdownMenuTrigger>-->
                <!--                    <DropdownMenuContent align="end">-->
                <!--                        <DropdownMenuLabel>My Account</DropdownMenuLabel>-->
                <!--                        <DropdownMenuSeparator />-->
                <!--                        <DropdownMenuItem>Settings</DropdownMenuItem>-->
                <!--                        <DropdownMenuItem>Support</DropdownMenuItem>-->
                <!--                        <DropdownMenuSeparator />-->
                <!--                        <DropdownMenuItem>-->
                <!--                            <Link :href="route('logout')" method="post" as="button" type="button">Logout</Link>-->
                <!--                        </DropdownMenuItem>-->
                <!--                    </DropdownMenuContent>-->
                <!--                </DropdownMenu>-->
            </header>
            <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 container">
                <div class="flex items-center">
                    <h1 class="text-lg font-semibold md:text-2xl">
                    </h1>
                </div>
                <div class="flex flex-1 rounded-lg">
                    <slot/>
                </div>
            </main>
        </div>
    </div>
</template>
