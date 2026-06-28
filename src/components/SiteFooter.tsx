import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-blog py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl font-bold">
            مَجلّة <span className="text-primary">مِداد</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-7">
            مساحةٌ للكتابة الهادئة، نُؤمن بأنّ النصّ الجميل صناعة، وأنّ القارئ يستحقّ التأمّل لا الضجيج.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-sm font-bold mb-3">روابط</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">الرئيسية</Link></li>
            <li><Link to="/categories" className="hover:text-primary">التصنيفات</Link></li>
            <li><Link to="/about" className="hover:text-primary">عن المدوّنة</Link></li>
            <li><Link to="/contact" className="hover:text-primary">تواصل</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-sm font-bold mb-3">النشرة البريدية</h4>
          <p className="text-sm text-muted-foreground mb-3">مقالٌ مختار كلّ أسبوع، في صندوق بريدك.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90">
              اشترك
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-blog py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© 2026 مَجلّة مِداد. جميع الحقوق محفوظة.</span>
          <span>صُنع بِحُبٍّ للقارئ العربي</span>
        </div>
      </div>
    </footer>
  );
}
