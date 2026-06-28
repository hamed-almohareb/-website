import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "عن المدوّنة — مَجلّة مِداد" },
      { name: "description", content: "مَجلّة مِداد مساحةٌ عربية للكتابة الهادئة في الأدب والفكر والفنون." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 container-blog py-16 max-w-3xl">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">عن المدوّنة</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
          مساحةٌ للكتابة الهادئة، بعيدًا عن الضجيج.
        </h1>
        <div className="prose-ar text-lg">
          <p>
            أُسّست <strong className="text-primary">مَجلّة مِداد</strong> سنة 2024 بفكرةٍ بسيطة: أن يكون
            للقارئ العربي مساحةٌ تليق بذائقته، تجمع بين عمق المحتوى وجمال التصميم.
          </p>
          <p>
            ننشر مقالًا واحدًا أو اثنين في الأسبوع، نختارهما بعناية. لا نُسابق الزمن، ولا نُساوم على الجودة.
          </p>
          <p>
            نُؤمن أنّ النصّ الجميل صناعةٌ تتطلّب صبرًا، وأنّ القارئ يستحقّ التأمّل لا الضجيج.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 text-center">
          {[
            { n: "٥٠+", l: "مقال منشور" },
            { n: "١٢ك", l: "قارئ شهريًا" },
            { n: "٨", l: "كُتّاب" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border bg-card p-6">
              <div className="font-serif text-4xl text-primary mb-1">{s.n}</div>
              <div className="text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
