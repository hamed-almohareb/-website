import heroImg from "@/assets/hero-1.jpg";
import architectureImg from "@/assets/post-architecture.jpg";
import writingImg from "@/assets/post-writing.jpg";
import booksImg from "@/assets/post-books.jpg";
import coffeeImg from "@/assets/post-coffee.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  date: string;
  readingTime: string;
  category: string;
  image: string;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "fan-al-kitaba",
    title: "فنّ الكتابة في زمنٍ مُتسارع",
    excerpt:
      "كيف نحافظ على عُمق التفكير وجمال الأسلوب في عصرٍ تطغى فيه السرعة على التأمّل؟ رحلة في صناعة النص.",
    body: [
      "الكتابة ليست تسجيلًا للأفكار فحسب، بل هي طريقة لِنحت الوعي. حين نكتب، نُجبر على ترتيب ما هو مُبعثر، وعلى مواجهة ما نتجنّبه في الحديث العابر.",
      "في زمنٍ يُكافئ السرعة، صار الصبر على الجملة الواحدة فعلًا ثوريًا. ليس المطلوب أن نكتب أكثر، بل أن نكتب أعمق، وأن نُصغي قبل أن نبوح.",
      "ابدأ بفقرة واحدة كلّ صباح، واقرأ ما كتبتَه بصوتٍ مسموع. ستكتشف أنّ أُذنك أصدق من عينك، وأنّ النص يتنفّس حين نُنصت إليه.",
    ],
    author: "ليلى المنصور",
    date: "12 يونيو 2026",
    readingTime: "٦ دقائق قراءة",
    category: "أدب",
    image: heroImg,
    featured: true,
  },
  {
    slug: "amara-andalusia",
    title: "العمارة الأندلسية: حوار النور والظل",
    excerpt: "من قرطبة إلى غرناطة، كيف صاغ المعماري المسلم لغةً بصرية ما زالت تُلهم العالم حتى اليوم.",
    body: [
      "تقوم العمارة الأندلسية على فلسفةٍ بسيطة: أن يكون الجمال خادمًا للوظيفة، وأن يتحدّث الحجر بلغة الإنسان.",
      "الأقواس المتداخلة، والزخارف الهندسية، والأفنية الداخلية، كلّها عناصر تخلق إيقاعًا بصريًا يستحضر الهدوء.",
    ],
    author: "كريم الحسيني",
    date: "8 يونيو 2026",
    readingTime: "٥ دقائق قراءة",
    category: "عمارة",
    image: architectureImg,
  },
  {
    slug: "alkhat-alarabi",
    title: "الخط العربي: حين يصبح الحرف لوحة",
    excerpt: "تأمّلات في جماليات الخط العربي، وكيف تحوّلت الكلمة إلى فنٍّ بصريٍّ مُستقل.",
    body: [
      "لم يكن الخط العربي مجرّد أداة لنقل المعنى، بل تطوّر ليصبح فنًّا قائمًا بذاته، يُعبِّر عن الروح قبل أن يُعبِّر عن الفكرة.",
      "من الكوفي الصارم إلى الديواني المنساب، كلّ خطٍّ يحمل شخصيته ومزاجه الخاص.",
    ],
    author: "نور الدين الرفاعي",
    date: "3 يونيو 2026",
    readingTime: "٤ دقائق قراءة",
    category: "فنون",
    image: writingImg,
  },
  {
    slug: "kutub-tughayyir",
    title: "خمسة كتبٍ غيّرت طريقتي في التفكير",
    excerpt: "قائمة شخصية بكُتبٍ لم تُضِف إلى معرفتي وحسب، بل أعادت تشكيل نظرتي للعالم.",
    body: [
      "ليس كلّ كتابٍ نقرؤه يترك أثرًا، لكنّ هناك كتبًا تُقسِم حياتنا إلى ما قبلها وما بعدها.",
      "في هذه القائمة أُشاركك خمسة منها، مع شرحٍ موجز لما أحدثته فيَّ.",
    ],
    author: "ليلى المنصور",
    date: "28 مايو 2026",
    readingTime: "٧ دقائق قراءة",
    category: "كتب",
    image: booksImg,
  },
  {
    slug: "qahwa-arabia",
    title: "القهوة العربية: طقسٌ يتجاوز الفنجان",
    excerpt: "ليست مجرّد مشروب، بل لغة ضيافة وامتدادٌ لتاريخٍ طويل من الكرم والمجالس.",
    body: [
      "في كلّ بيتٍ عربي، للقهوة طقسها الخاص: الدلّة، والمحماس، والهيل، وصوت السكب.",
      "هي لحظة توقّفٍ في يومٍ مزدحم، ودعوة للحديث والإصغاء.",
    ],
    author: "ريم الجابر",
    date: "20 مايو 2026",
    readingTime: "٣ دقائق قراءة",
    category: "ثقافة",
    image: coffeeImg,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const categories = Array.from(new Set(posts.map((p) => p.category)));
