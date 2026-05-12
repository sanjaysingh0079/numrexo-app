export default function Footer() {
    return (
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
  
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
  
            <a
              href="/about"
              className="hover:text-slate-900 transition"
            >
              About Us
            </a>
  
            <span>|</span>
  
            <a
              href="/sitemap"
              className="hover:text-slate-900 transition"
            >
              Sitemap
            </a>
  
            <span>|</span>
  
            <a
              href="/terms"
              className="hover:text-slate-900 transition"
            >
              Terms of Use
            </a>
  
            <span>|</span>
  
            <a
              href="/privacy-policy"
              className="hover:text-slate-900 transition"
            >
              Privacy Policy
            </a>
  
            <span>|</span>
  
            <span className="text-slate-600">
              © 2026 numrixo.com
            </span>
  
          </div>
  
        </div>
      </footer>
    );
  }