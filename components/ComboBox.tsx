"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { tenseBasedOptions, verbOptions } from "./data/CFormComboBox";
import { Tense } from "@/app/sessionstart/page";

interface ComboboxProps {
  verbType: "VAI" | "VII" | "VTA" | "VTI";
  tense: string;
  selectedWord: string;
  onSelect: (value: string) => void; // Callback prop to send selection back
}

export function Combobox({
  verbType,
  tense,
  selectedWord,
  onSelect,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const getFilteredPresentOptions = (selectedWord: string) => {
    if (tense !== "Present") return tenseBasedOptions[tense as Tense] || [];

    const presentOptions = tenseBasedOptions.Present;
    const occurrenceMap = new Map<string, number>();

    presentOptions.forEach(({ value }) => {
      const [key] = value.split("->"); // Extract the key (e.g., "aa" from "aa->ayaa")
      const index = selectedWord.indexOf(key);

      if (index !== -1 && !occurrenceMap.has(key)) {
        occurrenceMap.set(key, index);
      }
    });

    if (occurrenceMap.size === 0) return [];

    const entriesArray = Array.from(occurrenceMap.entries());
    const firstTransformation = entriesArray.sort((a, b) => a[1] - b[1])[0][0];

    return presentOptions.filter(({ value }) =>
      value.startsWith(firstTransformation + "->")
    );
  };

  //const frameworks = verbOptions[verbType] || [];
  // const frameworks = tenseBasedOptions[tense as Tense] || [];
  // Replace frameworks initialization with filtered options
  const frameworks = getFilteredPresentOptions(selectedWord);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Selection..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No selections.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? "" : currentValue;
                    setValue(newValue);
                    setOpen(false);
                    onSelect(newValue); // Call the callback with the new value
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
