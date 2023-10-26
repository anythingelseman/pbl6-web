import { Sidebar, TextInput } from "flowbite-react";
import { HiSearch, HiUsers, HiFilm } from "react-icons/hi";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BiTime, BiSolidCategoryAlt } from "react-icons/bi";
export default function SideBar() {
  return (
    <Sidebar className="bg-gray-50 hidden lg:fixed top-0 left-0 z-5 flex-col flex-shrink-0 pt-[60px] h-full duration-75  lg:flex transition-width  w-64 rounded-none">
      <div className="flex h-full flex-col justify-between py-2 rounded-none">
        <div className="rounded-none">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/manage/films" icon={HiFilm}>
                Film
              </Sidebar.Item>
              <Sidebar.Item href="/manage/employee" icon={HiUsers}>
                Employee
              </Sidebar.Item>
              <Sidebar.Item href="/manage/cinema" icon={BsFillHouseDoorFill}>
                Cinema
              </Sidebar.Item>
              <Sidebar.Item href="/manage/filmScheduling" icon={BiTime}>
                Film Scheduling
              </Sidebar.Item>

              <Sidebar.Item href="/manage/category" icon={BiSolidCategoryAlt}>
                Category
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
}
