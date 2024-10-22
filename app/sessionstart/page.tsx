import vaiWords from "@/components/data/VAIList";
import Header2 from "@/components/Header2";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Session() {
  return (
    <main className="flex-1 flex-col items-center justify-center w-full max-w-8xl ">
      <Header2 />
      <section className="flex-1 flex-col items-center w-full max-w-8xl justify-center p-2 md:p-8 ">
        <div className="flex flex-col items-center justify-center bg-white p-2 md:p-12 w-full max-w-8xl rounded shadow-md gap-8 border-2 border-black">
          <Menubar className="flex-1 w-full items-center justify-between border-2 border-black shadow-lg rounded-lg shadow-black ">
            <div className="flex-1 bg-[#F1CBFF] w-full p-2 hover:bg-[#D4FCFC] rounded-l-lg ">
              <MenubarMenu>
                <MenubarTrigger className="flex-1 w-full ">VAI</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>A FORM</MenubarItem>
                  <MenubarItem>B FORM</MenubarItem>
                  <MenubarItem>C FORM</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>A FORM-NEGATIVE</MenubarItem>
                  <MenubarItem>B FORM-NEGATIVE</MenubarItem>
                  <MenubarItem>C FORM-NEGATIVE</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </div>
            <div className="flex-1 bg-[#FFE4C7] p-2 hover:bg-[#D4FCFC] ">
              <MenubarMenu>
                <MenubarTrigger className="flex-1 w-full ">VII</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>A FORM</MenubarItem>
                  <MenubarItem>B FORM</MenubarItem>
                  <MenubarItem>C FORM</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>A FORM-NEGATIVE</MenubarItem>
                  <MenubarItem>B FORM-NEGATIVE</MenubarItem>
                  <MenubarItem>C FORM-NEGATIVE</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </div>
            <div className="flex-1 bg-[#C0BFF9] p-2 hover:bg-[#D4FCFC] ">
              <MenubarMenu>
                <MenubarTrigger className="flex-1 w-full ">VTA</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>A FORM</MenubarItem>
                  <MenubarItem>B FORM</MenubarItem>
                  <MenubarItem>C FORM</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>A FORM-NEGATIVE</MenubarItem>
                  <MenubarItem>B FORM-NEGATIVE</MenubarItem>
                  <MenubarItem>C FORM-NEGATIVE</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </div>
            <div className="flex-1 bg-[#FBFDB6] p-2 hover:bg-[#D4FCFC] rounded-r-lg">
              <MenubarMenu>
                <MenubarTrigger className="flex-1 w-full ">VTI</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>A FORM</MenubarItem>
                  <MenubarItem>B FORM</MenubarItem>
                  <MenubarItem>C FORM</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>A FORM-NEGATIVE</MenubarItem>
                  <MenubarItem>B FORM-NEGATIVE</MenubarItem>
                  <MenubarItem>C FORM-NEGATIVE</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </div>
          </Menubar>

          <div className="flex w-full flex-col md:flex-row mt-4  gap-4">
            <div className="flex-col w-full md:w-3/4">
              <div className="overflow-x-auto border border-black rounded-lg shadw-lg shadow-black">
                <table className="min-w-full bg-white ">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2"> </th>
                      <th className="border px-4 py-2">Person</th>
                      <th className="border px-4 py-2">Tense</th>
                      <th className="border px-4 py-2">VAI</th>
                      <th className="border px-4 py-2">Person</th>
                    </tr>
                  </thead>
                  <tbody>{/* Table Rows */}</tbody>
                </table>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
              </p>
            </div>
            <div className="flex w-full md:w-1/4 min-h-60">
              <div className=" flex-col w-full rounded border border-black shadow-lg shadow-black max-h-[150px] overflow-y-auto">
                <div className="border-b-1 p-2 border-black">
                  <h3 className="font-bold">Word Bank</h3>
                </div>
                <div className="bg-gray-100 p-2 rounded ">
                  {" "}
                  {/* Adjust min height as needed */}
                  {vaiWords.map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-3/4 self-start h-8 bg-[#7EE6D6] min-h-28 rounded-lg  border border-black shadow-lg shadow-black">
            <div className="flex w-full flex-row items-center justify-center gap-4">
              <p className="text-2xl ">--------</p>
              <p className="text-2xl ">--------</p>
              <p className="text-2xl ">--------</p>
              <p className="text-2xl ">--------</p>
            </div>
          </div>

          <div className="overflow-x-auto w-full border border-black rounded-lg shadw-lg shadow-black">
            <table className="w-full bg-white ">
              <thead>
                <tr>
                  <th className="border px-4 py-2"> </th>
                  <th className="border px-4 py-2">A Form</th>
                  <th className="border px-4 py-2">B Form</th>
                  <th className="border px-4 py-2">C Form</th>
                </tr>
              </thead>
              <tbody>{/* Table Rows */}</tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
