import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold text-primary">٤٠٤</h1>
        <h2 className="mt-4 font-serif text-2xl">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها لا وجود لها أو نُقلت إلى مكانٍ آخر.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:opacity-90"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl">حدث خطأٌ غير متوقّع</h1>
        <p className="mt-2 text-sm text-muted-foreground">حاول التحديث أو العودة للرئيسية.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:opacity-90"
          >
            إعادة المحاولة
          </button>
          <a href="/" className="rounded-md border border-border bg-background px-4 py-2 text-sm font-bold">الرئيسية</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "مَجلّة مِداد — كتابةٌ هادئة بالعربية" },
      { name: "description", content: "مدوّنة عربية أنيقة في الأدب والفكر والفنون. مقالاتٌ مُختارة بعنايةٍ للقارئ العربي." },
      { property: "og:title", content: "مَجلّة مِداد — كتابةٌ هادئة بالعربية" },
      { property: "og:description", content: "مدوّنة عربية أنيقة في الأدب والفكر والفنون. مقالاتٌ مُختارة بعنايةٍ للقارئ العربي." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "مَجلّة مِداد — كتابةٌ هادئة بالعربية" },
      { name: "twitter:description", content: "مدوّنة عربية أنيقة في الأدب والفكر والفنون. مقالاتٌ مُختارة بعنايةٍ للقارئ العربي." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fa251e09-d041-46bd-a2b0-cc2e5717d0ef/id-preview-c1e3b96f--8896206a-6fd9-466b-baf1-37a0a0457925.lovable.app-1782615516083.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fa251e09-d041-46bd-a2b0-cc2e5717d0ef/id-preview-c1e3b96f--8896206a-6fd9-466b-baf1-37a0a0457925.lovable.app-1782615516083.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
