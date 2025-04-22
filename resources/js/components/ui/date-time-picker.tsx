    "use client";

    import * as React from "react";
    import { add, format } from "date-fns";
    import { Calendar as CalendarIcon } from "lucide-react";

    import { cn } from "@/lib/utils";
    import { Button } from "@/components/ui/button";
    import { Calendar } from "@/components/ui/calendar";
    import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    } from "@/components/ui/popover";
    import { TimePickerDemo } from "./time-picker-demo";

    interface DateTimePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    className?: string;
    }

    export function DateTimePicker({ value, onChange }: DateTimePickerProps) {
    const [date, setDate] = React.useState<Date | undefined>(value);

    React.useEffect(() => {
        setDate(value);
    }, [value]);

    const handleSelect = (newDay: Date | undefined) => {
        if (!newDay) {
        setDate(undefined);
        onChange?.(undefined);
        return;
        }

        if (!date) {
        setDate(newDay);
        onChange?.(newDay);
        return;
        }

        const diff = newDay.getTime() - date.getTime();
        const diffInDays = diff / (1000 * 60 * 60 * 24);
        const newDateFull = add(date, { days: Math.ceil(diffInDays) });
        setDate(newDateFull);
        onChange?.(newDateFull);
    };

    return (
        <Popover>
        <PopoverTrigger asChild>
            <Button
            variant={"outline"}
            className={cn(
                "w-full justify-start text-left font-normal bg-transparent",
                !date && "text-muted-foreground"
            )}
            >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP HH:mm:ss") : <span>Pick a date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
            <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
            />
            <div className="p-3 border-t border-border">
            <TimePickerDemo setDate={setDate} date={date} />
            </div>
        </PopoverContent>
        </Popover>
    );
    }