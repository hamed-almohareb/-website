import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MessageCircle, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — مَجلّة مِداد" },
      { name: "description", content: "تواصل مع فريق مَجلّة مِداد عبر البريد أو وسائل التواصل." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 container-blog py-16 max-w-3xl">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">تواصل</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-4">نُحبّ أن نسمع منك</h1>
        <p className="text-lg text-muted-foreground leading-9 mb-10">
          سواء كنتَ قارئًا أو كاتبًا أو لديك اقتراح، باب المراسلة مفتوح.
        </p>

        <form className="grid gap-5" onSubmit={(e) => { e.preventDefault(); alert("تمّ إرسال رسالتك"); }}>
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-sm font-bold mb-2 block">الاسم</span>
              <input required className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
            </label>
            <label className="block">
              <span className="text-sm font-bold mb-2 block">البريد الإلكتروني</span>
              <input required type="email" className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-bold mb-2 block">الموضوع</span>
            <input className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
          </label>
          <label className="block">
            <span className="text-sm font-bold mb-2 block">الرسالة</span>
            <textarea required rows={6} className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary resize-none" />
          </label>
          <button className="justify-self-start rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90">
            إرسال الرسالة
          </button>
        </form>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { i: Mail, t: "البريد", v: "hello@midad.blog" },
            { i: Twitter, t: "تويتر", v: "@midad_blog" },
            { i: MessageCircle, t: "تيليجرام", v: "@midad" },
          ].map(({ i: Icon, t, v }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5">
              <Icon className="h-5 w-5 text-primary mb-3" />
              <div className="text-xs text-muted-foreground mb-1">{t}</div>
              <div className="font-bold">{v}</div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
