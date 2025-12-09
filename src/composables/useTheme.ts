import { ref, watch, onMounted } from 'vue';

const isDark = ref(false);

export function useTheme() {
    const initTheme = (): void => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            isDark.value = savedTheme === 'dark';
        } else {
            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        applyTheme();
    };

    const applyTheme = (): void => {
        if (isDark.value) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleTheme = (): void => {
        isDark.value = !isDark.value;
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
        applyTheme();
    };

    const setTheme = (dark: boolean): void => {
        isDark.value = dark;
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        applyTheme();
    };

    watch(isDark, applyTheme);

    onMounted(() => {
        initTheme();
    });

    return {
        isDark,
        toggleTheme,
        setTheme,
        initTheme,
    };
}
