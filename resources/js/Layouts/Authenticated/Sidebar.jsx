import MenuItem from "./MenuItem";
import { UserMenu, UserOthers } from "./MenuList";
import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img
                        src="/images/movieton.svg"
                        alt=""
                        className="max-w-[200px]"
                    />
                </a>
                <span className="text-xs">Member of AFK Corp.</span>
                <div className="links flex flex-col mt-[40px] h-full gap-[50px]">
                    {/* Start of Menu */}
                    <div>
                        <div className="text-gray-1 text-sm mb-2">Menu</div>
                        {UserMenu.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                    </div>
                    {/* End of Menu */}

                    {/* Start of Others */}
                    <div>
                        <div className="text-gray-1 side-link mb-2">Others</div>
                        {UserOthers.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>
                    {/* End of Others */}
                    {/* Start of Subscription details */}
                    {auth.activePlan && (
                        <SubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === "Luxury"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                    {/* End of Subscription details */}
                </div>
            </div>
        </aside>
    );
}
