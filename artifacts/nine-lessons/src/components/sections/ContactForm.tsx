import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useSubmitApplication } from "@workspace/api-client-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  role: z.enum(["expert", "school", "center", "parent", "teacher", "psychologist"], {
    required_error: "Пожалуйста, выберите вашу роль",
  }),
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  organization: z.string().optional(),
  email: z.string().email("Введите корректный email адрес"),
  phone: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Необходимо согласие на обработку данных" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate: submitApplication, isPending } = useSubmitApplication();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    submitApplication(
      { data },
      {
        onSuccess: () => {
          setIsSuccess(true);
        },
      }
    );
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-card border border-primary/30 p-12 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              Спасибо за ваш интерес
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы получили вашу заявку. В ближайшее время мы свяжемся с вами по указанным контактам для обсуждения деталей сотрудничества.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Связаться с нами
            </h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, чтобы присоединиться к проекту в качестве эксперта, предложить пилотную площадку или получить доступ к материалам.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-6 md:p-10"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваша роль в проекте *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border/50 h-12 rounded-none">
                            <SelectValue placeholder="Выберите роль" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-none border-border/50">
                          <SelectItem value="expert">Педагог-методист</SelectItem>
                          <SelectItem value="psychologist">Подростковый психолог</SelectItem>
                          <SelectItem value="teacher">Практикующий учитель</SelectItem>
                          <SelectItem value="school">Директор школы</SelectItem>
                          <SelectItem value="center">Образовательный центр</SelectItem>
                          <SelectItem value="parent">Родитель</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя Фамилия *</FormLabel>
                        <FormControl>
                          <Input placeholder="Иван Иванов" {...field} className="bg-background border-border/50 h-12 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Организация (опционально)</FormLabel>
                        <FormControl>
                          <Input placeholder="Школа №123 / Центр развития" {...field} value={field.value || ""} className="bg-background border-border/50 h-12 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="ivan@example.com" type="email" {...field} className="bg-background border-border/50 h-12 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Телефон / Мессенджер (опционально)</FormLabel>
                        <FormControl>
                          <Input placeholder="+7 (999) 000-00-00" {...field} value={field.value || ""} className="bg-background border-border/50 h-12 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Комментарий (опционально)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Ваши вопросы, предложения или ожидания от проекта" 
                          className="bg-background border-border/50 min-h-[120px] rounded-none resize-none" 
                          {...field} 
                          value={field.value || ""} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-none border border-border/30 p-4 bg-background/50">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-primary rounded-none mt-0.5"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-muted-foreground font-normal">
                          Я согласен/согласна на обработку персональных данных
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-none text-base font-medium"
                >
                  {isPending ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
