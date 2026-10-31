import type {ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute, useLocation} from "@tanstack/react-router";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import appCss from "@/index.css?url";
import {useEffect} from "react";
import {CookieBanner} from "@/components/CookieBanner";
import NotFound from "@/pages/NotFound";

const TITLE = "Рекламное агентство Графика — Изготовление вывесок в Благовещенске";
const DESCRIPTION =
    "Изготовление и монтаж наружной рекламы в Благовещенске: световые вывески, объемные буквы, световая реклама. Гарантия до 3 лет. 11+ лет опыта. 2000+ проектов.";
const OG_IMAGE = "https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/og-image-1765406083395.png";
const FAVICON = "https://cdn.poehali.dev/files/logo_ragrafika.png";

const METRIKA = `(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
            return;
        }
    }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(101026698, "init", {
    trustedDomains: ["poehali.dev"],
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    trackHash: true
});`;

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {title: TITLE},
            {name: "description", content: DESCRIPTION},
            {property: "og:title", content: TITLE},
            {property: "og:description", content: DESCRIPTION},
            {name: "keywords", content: "вывеска Благовещенск, заказать вывеску Благовещенск, вывеска Свободный, объемные буквы, световая вывеска, световые буквы, наружная реклама, рекламное агентство"},
            {name: "author", content: "Рекламное агентство Графика"},
            {name: "google-site-verification", content: "YOUR_VERIFICATION_CODE"},
            {property: "og:type", content: "website"},
            {property: "og:url", content: "https://ragrafika.ru/"},
            {property: "og:image", content: OG_IMAGE},
            {property: "og:image:width", content: "4800"},
            {property: "og:image:height", content: "2520"},
            {property: "og:image:alt", content: "Рекламное агентство Графика — вывески и наружная реклама"},
            {name: "twitter:card", content: "summary_large_image"},
            {name: "twitter:title", content: "Рекламное агентство Графика"},
            {name: "twitter:description", content: "Изготовление вывесок в Благовещенске. 11+ лет на рынке"},
            {name: "twitter:image", content: OG_IMAGE},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "icon", type: "image/png", sizes: "32x32", href: FAVICON},
            {rel: "icon", type: "image/png", sizes: "16x16", href: FAVICON},
            {rel: "apple-touch-icon", sizes: "180x180", href: FAVICON},
            {rel: "preconnect", href: "https://fonts.googleapis.com"},
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
            {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"},
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
            {
                src: "https://pyrus.com/js/webwidget?id=tFX5SxKZ2xVijXGM4B9e01pxxkJZrhsHZnpsC2vbMiBwFaufO4fpQuYhBY4GcRtqdF0AqBfpkOa5RIVeLivcaVrJ-Xdj8AHyvVE0MWO2G94ZvLR5MyGeUEk8fW22HvZDgHan6Q%3D%3D",
                async: true,
            },
            {children: METRIKA},
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFound,
});

function RootComponent() {
    return (
        <RootDocument>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>
                <GeometriaFont/>
                <ScrollToTop/>
                <Outlet/>
                <CookieBanner/>
            </TooltipProvider>
        </RootDocument>
    );
}

// Remote decorative font: registered after the page load so a slow font host
// never holds up the page (it used font-display: swap before as well).
function GeometriaFont() {
    useEffect(() => {
        const register = () => {
            if (typeof FontFace === "undefined") return;
            const font = new FontFace(
                "Geometria",
                'url("https://db.onlinewebfonts.com/t/1eb70124cb1ca4eb960547daff96a6bc.woff2") format("woff2")',
                {weight: "700", style: "normal", display: "swap"},
            );
            document.fonts.add(font);
            font.load().catch(() => undefined);
        };
        if (document.readyState === "complete") {
            register();
            return;
        }
        window.addEventListener("load", register, {once: true});
        return () => window.removeEventListener("load", register);
    }, []);

    return null;
}

function ScrollToTop() {
    const pathname = useLocation({select: (l) => l.pathname});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/101026698" style={{position: "absolute", left: "-9999px"}} alt=""/></div>
        </noscript>
        <Scripts/>
        </body>
        </html>
    );
}
