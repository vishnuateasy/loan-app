"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import HomeLeft from "./home-left";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  RadioGroup,
  Radio,
  FormControl as MUIFormControl,
  FormLabel as MUIFormLabel,
} from "@mui/material"; // Adjust imports as needed

interface Hform6Props {
  onBack: () => void;
}

const formSchema = z.object({
  Gender: z.enum(["Male", "Female"]).optional(),
  FullName: z.string().min(1, "Full Name is required"),
  Email: z.string().email("Invalid email address"),
  DOB: z.string().min(1, "Date of Birth is required"),
  PinCode: z.string().min(1, "Pin Code is required"),
  PAN: z.string().min(1, "PAN is required"),
});

const Hform6: React.FC<Hform6Props> = ({ onBack }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Gender: undefined,
      FullName: "",
      Email: "",
      DOB: "",
      PinCode: "",
      PAN: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <HomeLeft />

      {/* Right Section */}
      <div className="flex-1 bg-white p-6 lg:p-10 mx-auto max-w-md lg:max-w-xl flex flex-col items-center">
        <div className="flex items-center w-full mb-4">
          <Button
            className="bg-gray-300 hover:bg-slate-300 w-4 h-4 p-2"
            onClick={onBack}
          >
            <ArrowBackIosNewRoundedIcon />
          </Button>
          <h3 className="text-lg lg:text-xl font-semibold text-blue ml-4 flex-1">
            One step away to Get Best Offers
          </h3>
        </div>
    

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
            {/* Gender Field */}
            <FormField
              control={form.control}
              name="Gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <MUIFormControl>
                    <RadioGroup
                      value={field.value || ""}
                      onChange={(event) => field.onChange(event.target.value)}
                      aria-labelledby="gender-radio-group"
                      
                    >
                        <div className="flex ">

                      <div className="flex items-center">
                        <Radio
                          value="Male"
                          checked={field.value === "Male"}
                          onChange={(event) =>
                            field.onChange(event.target.value)
                          }
                        />
                        <MUIFormLabel className="ml-2">Male</MUIFormLabel>
                      </div>
                      <div className="flex items-center">
                        <Radio
                          value="Female"
                          checked={field.value === "Female"}
                          onChange={(event) =>
                            field.onChange(event.target.value)
                          }
                        />
                        <MUIFormLabel className="ml-2">Female</MUIFormLabel>
                      </div>
                        </div>
                    </RadioGroup>
                  </MUIFormControl>
                  <FormDescription>Select your gender.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Other Form Fields */}
            <FormField
              control={form.control}
              name="FullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} className="w-full h-10 text-sm" />
                  </FormControl>
                  <FormDescription>Enter your full name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} className="w-full h-10 text-sm" />
                  </FormControl>
                  <FormDescription>Enter your email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="DOB"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="w-full h-10 text-sm" />
                  </FormControl>
                  <FormDescription>Select your date of birth.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="PinCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pin Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Pin Code" {...field} className="w-full h-10 text-sm" />
                  </FormControl>
                  <FormDescription>Enter your pin code.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="PAN"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PAN</FormLabel>
                  <FormControl>
                    <Input placeholder="PAN" {...field} className="w-full h-10 text-sm" />
                  </FormControl>
                  <FormDescription>Enter your PAN number.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="bg-blue-700 text-white hover:bg-blue-800 w-full h-10 mt-4">
              Unlock best offers
            </Button>
          </form>
        </Form>
         
      </div>
    </div>
  );
};

export default Hform6;
