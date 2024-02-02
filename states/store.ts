import create from 'zustand';

interface NavStore {
    toggleNav: boolean;
    setToggleNav: () => void;
}

interface MenuStore{
    active: string;
    setActive: (hashLink: string) => void;
}

export const useNavStore = create<NavStore>((set) => ({
    toggleNav: false,
    setToggleNav: () => set((state) => ({ toggleNav: !state.toggleNav })),
}));

export const useMenuStore = create<MenuStore>((set) => ({
    active: '/',
    setActive: (hashLink: string) => set((state) => ({ active: hashLink})),
}));