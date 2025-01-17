import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/logo2.png" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">Keyblade Bot</p>
                            </div>
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://cdn.discordapp.com/attachments/1102100896726388807/1149599177593081946/images_edit_38654398898325.png`}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        Türkçe
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
<div className="py-1"></div>
<a href="https://top.gg/bot/1118497331357159470">
  <img src={"https://top.gg/api/widget/servers/1118497331357159470.svg"}/>
</a>
<div className="py-1"></div>
<a href="https://top.gg/bot/1118497331357159470">
  <img src={"https://top.gg/api/widget/upvotes/1118497331357159470.svg"}/>
</a>
<div className="py-1"></div>
<a href="https://top.gg/bot/1118497331357159470">
  <img src={"https://top.gg/api/widget/owner/1118497331357159470.svg"}/>
</a>
                                </div>
                            </Menu>
                        
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Linkler</p>
                            <div>
                                <Link href="https://top.gg/bot/1118497331357159470/vote">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Oy Ver
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://discord.gg/ztReqCqPsz" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Destek Sunucusu
                                </a>
                            </div>
                            <div>
                                <a href=" https://discord.com/oauth2/authorize?client_id=1118497331357159470&scope=bot&permissions=8" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Botu Ekle
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Medya</p>
                            <div>
                                <Link href="https://discord.gg/ztReqCqPsz">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Disocrd 
                                    </a>
                                 </Link>
                            </div>
                            <div>
                                <Link href="https://instagram.com/keyblade_dev?utm_source=qr&igshid=MThlNWY1MzQwNA==">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-instagram`} /> İnstagram
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://youtube.com/@keyblade_dev?si=mFlPU8-MCyQ6LtVB">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-youtube`} /> YouTube 
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Bilgi</p>
                            <div>
                                <Link href="/tos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Terms Of Service
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/privacy">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Privacy Policy
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Keyblade Bot
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    Bot Aktif
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"Keyblade Bot ❤️"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
