import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">联系方式</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          联系我
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          If you are looking for a backend engineer with experience in enterprise
          systems and real-world delivery, feel free to reach out by email or phone.
        </p>
        <div className="grid w-full max-w-xl gap-3 sm:grid-cols-3">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="rounded-xl border bg-background/80 px-4 py-3 text-left transition-colors hover:bg-muted"
          >
            <div className="text-xs text-muted-foreground">邮箱</div>
            <div className="mt-1 text-sm font-medium break-all">{DATA.contact.email}</div>
          </a>
          <a
            href={`tel:${DATA.contact.tel}`}
            className="rounded-xl border bg-background/80 px-4 py-3 text-left transition-colors hover:bg-muted"
          >
            <div className="text-xs text-muted-foreground">电话</div>
            <div className="mt-1 text-sm font-medium">{DATA.contact.tel}</div>
          </a>
          <a
            href={DATA.contact.social.Resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border bg-background/80 px-4 py-3 text-left transition-colors hover:bg-muted"
          >
            <div className="text-xs text-muted-foreground">附件</div>
            <div className="mt-1 text-sm font-medium">下载简历 PDF</div>
          </a>
        </div>
      </div>
    </div>
  );
}
