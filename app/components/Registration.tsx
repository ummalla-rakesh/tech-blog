'use client';
import { Link } from '@remix-run/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';

interface FiledsList {
  name: 'name' | 'email' | 'password' | 'profession';
  placeholder: string;
  type: string;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters.',
    })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/, {
      message: 'Password must contain at least one letter and one number.',
    }),
  profession: z.string().min(2, {
    message: 'Profession must be at least 2 characters.',
  }),
});

const fieldsList: FiledsList[] = [
  {
    name: 'name',
    placeholder: 'Full Name',
    type: 'text',
  },
  {
    name: 'profession',
    placeholder: 'Profession',
    type: 'text',
  },
  {
    name: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
];

export default function Registration() {
  const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      profession: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {fieldsList.map((item, index) => {
                return (
                  <FormField
                    key={index}
                    control={form.control}
                    name={item.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type={item.type}
                            placeholder={item.placeholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                );
              })}
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
