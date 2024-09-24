import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
            addUtilities(
                {
                    ".no-scrollbar": {
                        "-ms-overflow-style": "none" /* IE and Edge */,
                        "scrollbar-width": "none" /* Firefox */,
                    },
                    ".no-scrollbar::-webkit-scrollbar": {
                        display: "none" /* Chrome, Safari, and Opera */,
                    },
                },
                { respectPrefix: false, respectImportant: false }
            );
        },
    ],
};
export default config;
