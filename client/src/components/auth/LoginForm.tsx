"use client"

 import {zodResolver} from "@hookform/resolvers/zod";
 import {useForm} from "react-hook-form";
import { z } from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "../ui/input";



const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const LoginForm = () => {
    // Define form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            username:"",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>)  {
    // Handle form submission logic here
    console.log("Form submitted:", values);
  }

  return (
  <div className="card-border lg:min-w-[566px] ">
    <div className="flex flex-column gap-6 card py-14 px-10 ">
        <div className="flex flex-row gap-2 justify-center">
{/* 31:00 */}
        </div>

    </div>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  </div>
    
  )
}

export default LoginForm